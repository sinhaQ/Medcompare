const mongoose = require("mongoose");

// The price of one medicine at one store (187 are seeded).
// The MRP is not repeated here: it is the medicine's own MRP.
const medicinePriceSchema = new mongoose.Schema({
    medicineId: { type: mongoose.Schema.Types.ObjectId, ref: "Medicine", required: true },
    storeId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: String, enum: ["in", "limited", "out"], required: true },
    // Same single "delivery" object the frontend already uses.
    delivery: {
        mainLabel: { type: String, required: true },
        subLabel: { type: String, default: "" },
        pill: { type: String, default: "" },
        speed: { type: String, enum: ["express", "fast", "standard", "slow"], required: true }
    }
});

// A store can have only one price per medicine.
medicinePriceSchema.index({ medicineId: 1, storeId: 1 }, { unique: true });

module.exports = mongoose.model("MedicinePrice", medicinePriceSchema);
