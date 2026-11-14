// Central route registry
const express = require("express");

const healthRoutes = require("./healthRoutes");
const medicineRoutes = require("./medicineRoutes");
const labTestRoutes = require("./labTestRoutes");

const router = express.Router();

// Health API
router.use("/health", healthRoutes);

// Medicine API
router.use("/medicines", medicineRoutes);

// Lab Test API
router.use("/lab-tests", labTestRoutes);

module.exports = router;