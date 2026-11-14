// Seed script: loads the existing MedCompare data into MongoDB.
//
// Run from the backend folder:
//   npm run seed -- ../frontend/medicinesData.js
//
// It is safe to run again and again: every record is matched by its natural key
// (slug, store code, hospital code, or medicine+store / test+hospital) and
// updated in place, so no duplicates are created. It never deletes anything.
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const mongoose = require("mongoose");

const connectDB = require("../config/db");
const Medicine = require("../models/Medicine");
const Store = require("../models/Store");
const MedicinePrice = require("../models/MedicinePrice");
const LabTest = require("../models/LabTest");
const Hospital = require("../models/Hospital");
const LabTestPrice = require("../models/LabTestPrice");

const storesData = require("./data/stores");
const cbcData = require("./data/cbcData");

// ---------- helpers ----------

// Where is medicinesData.js? Use the path given on the command line, or look
// for ../frontend/medicinesData.js next to the backend folder.
function findMedicinesFile() {
    const given = process.argv[2];
    const candidate = given
        ? path.resolve(process.cwd(), given)
        : path.resolve(__dirname, "../../../frontend/medicinesData.js");

    if (!fs.existsSync(candidate)) {
        throw new Error(
            `Cannot find medicinesData.js at: ${candidate}\n` +
            "Tell the script where it is, for example:\n" +
            "  npm run seed -- ../frontend/medicinesData.js"
        );
    }
    return candidate;
}

// medicinesData.js is written for the browser ("window.ALL_MEDICINES = [...]").
// We run it in a sandbox to read the list. The file itself is never changed.
function loadMedicines(file) {
    const sandbox = { window: {} };
    vm.runInNewContext(fs.readFileSync(file, "utf8"), sandbox);
    const list = sandbox.window.ALL_MEDICINES;
    if (!Array.isArray(list) || list.length === 0) {
        throw new Error("medicinesData.js did not contain window.ALL_MEDICINES");
    }
    return list;
}

// Insert the record if it is new, otherwise update it. Counts what happened.
async function upsert(Model, filter, data, stats) {
    const result = await Model.updateOne(filter, { $set: data }, { upsert: true, runValidators: true });
    if (result.upsertedCount) stats.created++;
    else if (result.modifiedCount) stats.updated++;
    else stats.unchanged++;
}

const newStats = () => ({ created: 0, updated: 0, unchanged: 0 });

// ---------- main ----------

async function seed() {
    const medicinesFile = findMedicinesFile();
    const medicines = loadMedicines(medicinesFile);
    console.log(`Reading ${medicines.length} medicines from ${medicinesFile}`);

    await connectDB();

    // Make sure the unique indexes exist before we write anything.
    for (const Model of [Medicine, Store, MedicinePrice, LabTest, Hospital, LabTestPrice]) {
        await Model.init();
    }

    const stats = {
        Store: newStats(), Medicine: newStats(), MedicinePrice: newStats(),
        LabTest: newStats(), Hospital: newStats(), LabTestPrice: newStats()
    };

    // 1. Stores
    for (const store of storesData) {
        await upsert(Store, { code: store.code }, store, stats.Store);
    }
    const storeIdByCode = {};
    (await Store.find()).forEach((s) => { storeIdByCode[s.code] = s._id; });

    // 2. Medicines (without their price rows)
    for (const med of medicines) {
        await upsert(Medicine, { slug: med.slug }, {
            legacyId: med.id,
            name: med.name,
            slug: med.slug,
            genericName: med.genericName,
            icon: med.icon,
            type: med.type,
            packSize: med.packSize,
            mrp: med.mrp,
            requiresRx: med.requiresRx,
            avgRating: med.avgRating,
            totalReviews: med.totalReviews,
            description: med.description
        }, stats.Medicine);
    }
    const medicineIdBySlug = {};
    (await Medicine.find()).forEach((m) => { medicineIdBySlug[m.slug] = m._id; });

    // 3. Medicine prices (one per medicine + store)
    const seen = new Set();
    for (const med of medicines) {
        for (const row of med.prices) {
            const key = `${med.slug}|${row.storeId}`;
            if (seen.has(key)) throw new Error(`Duplicate price row: ${key}`);
            seen.add(key);

            if (!storeIdByCode[row.storeId]) throw new Error(`${med.slug}: unknown store "${row.storeId}"`);
            if (row.mrp !== med.mrp) throw new Error(`${key}: row MRP ${row.mrp} differs from medicine MRP ${med.mrp}`);
            if (row.price > med.mrp) throw new Error(`${key}: price ${row.price} is above MRP ${med.mrp}`);

            await upsert(
                MedicinePrice,
                { medicineId: medicineIdBySlug[med.slug], storeId: storeIdByCode[row.storeId] },
                {
                    medicineId: medicineIdBySlug[med.slug],
                    storeId: storeIdByCode[row.storeId],
                    price: row.price,
                    stock: row.stock,
                    delivery: {
                        mainLabel: row.delivery.mainLabel,
                        subLabel: row.delivery.subLabel,
                        pill: row.delivery.pill,
                        speed: row.delivery.speed
                    }
                },
                stats.MedicinePrice
            );
        }
    }

    // 4. CBC lab test
    await upsert(LabTest, { slug: cbcData.test.slug }, cbcData.test, stats.LabTest);
    const cbc = await LabTest.findOne({ slug: cbcData.test.slug });

    // 5. Hospitals and their CBC prices
    for (const item of cbcData.hospitals) {
        await upsert(Hospital, { code: item.hospital.code }, item.hospital, stats.Hospital);
        const hospital = await Hospital.findOne({ code: item.hospital.code });

        if (item.price.price > cbc.mrp) {
            throw new Error(`${item.hospital.code}: price ${item.price.price} is above the CBC MRP ${cbc.mrp}`);
        }
        await upsert(
            LabTestPrice,
            { labTestId: cbc._id, hospitalId: hospital._id },
            { labTestId: cbc._id, hospitalId: hospital._id, ...item.price },
            stats.LabTestPrice
        );
    }

    // ---------- summary ----------
    console.log("\nSeed finished.\n");
    const models = { Store, Medicine, MedicinePrice, LabTest, Hospital, LabTestPrice };
    console.log("Collection      created  updated  unchanged  total in database");
    for (const [name, Model] of Object.entries(models)) {
        const s = stats[name];
        const total = await Model.countDocuments();
        console.log(
            `${name.padEnd(15)} ${String(s.created).padStart(7)}  ${String(s.updated).padStart(7)}  ` +
            `${String(s.unchanged).padStart(9)}  ${String(total).padStart(17)}`
        );
    }
}

seed()
    .then(() => mongoose.disconnect())
    .catch(async (error) => {
        console.error("Seed failed:", error.message);
        await mongoose.disconnect().catch(() => {});
        process.exit(1);
    });
