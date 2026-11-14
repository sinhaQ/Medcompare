const express = require("express");
const router = express.Router();

const {
    getMedicines,
    getMedicineBySlug,
    getMedicineComparison
} = require("../controllers/medicineController");

// GET all medicines / search medicines
router.get("/", getMedicines);

// GET single medicine by slug
router.get("/:slug", getMedicineBySlug);

// GET price comparison for a medicine by slug
router.get("/:slug/compare", getMedicineComparison);

module.exports = router;