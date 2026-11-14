const mongoose = require("mongoose");

// One document per lab test. Only CBC is seeded for now.
const labTestSchema = new mongoose.Schema({
    legacyId: { type: String, unique: true, sparse: true }, // original id, e.g. "test-cbc"
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: String, required: true, trim: true },
    icon: { type: String, default: "🧪" },
    parametersCount: { type: Number, required: true, min: 1 },
    sampleType: { type: String, required: true, trim: true },
    fastingRequired: { type: Boolean, default: false },
    fastingHours: { type: Number, min: 0, default: 0 },
    mrp: { type: Number, required: true, min: 0 },
    description: { type: String, trim: true }
});

module.exports = mongoose.model("LabTest", labTestSchema);
