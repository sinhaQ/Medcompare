const mongoose = require("mongoose");

// One document per medicine (53 are seeded from medicinesData.js).
const medicineSchema = new mongoose.Schema({
    legacyId: { type: String, unique: true, sparse: true }, // original id, e.g. "med-paracetamol"
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    genericName: { type: String, required: true, trim: true },
    icon: { type: String, default: "💊" },
    type: { type: String, required: true, trim: true },
    packSize: { type: String, required: true, trim: true },
    mrp: { type: Number, required: true, min: 0 },
    requiresRx: { type: Boolean, default: false },
    avgRating: { type: Number, min: 0, max: 5, default: 0 },
    totalReviews: { type: Number, min: 0, default: 0 },
    description: { type: String, trim: true }
});

module.exports = mongoose.model("Medicine", medicineSchema);
