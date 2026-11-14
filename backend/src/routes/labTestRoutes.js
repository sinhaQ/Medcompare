
const express = require("express");
const router = express.Router();

const {
    getLabTests,
    getLabTestBySlug,
    getLabTestComparison
} = require("../controllers/labTestController");

// GET all lab tests / search lab tests
router.get("/", getLabTests);

// GET single lab test by slug
router.get("/:slug", getLabTestBySlug);

// GET price comparison for a lab test
router.get("/:slug/compare", getLabTestComparison);

module.exports = router;
