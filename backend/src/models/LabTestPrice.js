const mongoose = require("mongoose");

// The price of one lab test at one hospital (6 CBC prices are seeded).
// The MRP is not repeated here: it is the test's own MRP.
const labTestPriceSchema = new mongoose.Schema({
    labTestId: { type: mongoose.Schema.Types.ObjectId, ref: "LabTest", required: true },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital", required: true },
    price: { type: Number, required: true, min: 0 },
    turnaroundHours: { type: Number, required: true, min: 0 },
    // Stored as-is because the frontend text can't be worked out from the hours.
    turnaroundLabel: { type: String, required: true }
});

// A hospital can have only one price per test.
labTestPriceSchema.index({ labTestId: 1, hospitalId: 1 }, { unique: true });

module.exports = mongoose.model("LabTestPrice", labTestPriceSchema);
