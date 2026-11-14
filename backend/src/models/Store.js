const mongoose = require("mongoose");

const hexColour = [/^#[0-9a-fA-F]{6}$/, "must be a hex colour like #e6f9f7"];

// One document per pharmacy (6 are seeded). "code" is the short id used in the
// frontend data: pe, 1mg, nm, ap, mp, az.
const storeSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true, unique: true, trim: true },
    logoText: { type: String, required: true, trim: true },
    bgColor: { type: String, required: true, match: hexColour },
    textColor: { type: String, required: true, match: hexColour },
    avgRating: { type: Number, min: 0, max: 5, default: 0 },
    totalReviews: { type: Number, min: 0, default: 0 }
});

module.exports = mongoose.model("Store", storeSchema);
