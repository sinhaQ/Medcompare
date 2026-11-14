const mongoose = require("mongoose");

const hexColour = [/^#[0-9a-fA-F]{6}$/, "must be a hex colour like #e6f9f7"];

// One document per hospital / diagnostic lab (6 are seeded).
// "code" is the id the frontend sends when booking, e.g. "hosp-apollo".
const hospitalSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true, trim: true },
    tagline: { type: String, trim: true },
    logoText: { type: String, required: true, trim: true },
    bgColor: { type: String, required: true, match: hexColour },
    textColor: { type: String, required: true, match: hexColour },
    accreditations: [String],
    avgRating: { type: Number, min: 0, max: 5, default: 0 },
    totalReviews: { type: Number, min: 0, default: 0 },
    address: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    // Demo distance (km) from Mumbai 400001, copied from the frontend demo data.
    distanceKm: { type: Number, min: 0 },
    homeCollection: {
        available: { type: Boolean, default: false },
        fee: { type: Number, min: 0, default: 0 },
        estimatedArrivalMins: { type: Number, min: 0 },
        slots: [String],
        cutoffNotice: String
    },
    labVisit: {
        available: { type: Boolean, default: false },
        openTime: String
    }
});

module.exports = mongoose.model("Hospital", hospitalSchema);
