// Express application: middleware and routes only.
// No database connection and no app.listen() here (see server.js).
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors({
    origin: "http://127.0.0.1:5500"
}));

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to MedCompare Backend!");
});

// API routes (GET /api/health lives here)
app.use("/api", routes);

// Unknown routes and centralised error handling (must come last)
app.use(notFound);
app.use(errorHandler);

module.exports = app;