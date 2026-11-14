// MongoDB connection logic.
// The connection string is read from MONGODB_URI (set in your .env file)
// and is never printed or logged.
const mongoose = require("mongoose");

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error("MONGODB_URI is not defined. Add it to your .env file.");
    }

    await mongoose.connect(uri);
    console.log("MongoDB Connected Successfully!");
};

module.exports = connectDB;