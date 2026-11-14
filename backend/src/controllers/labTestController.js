const LabTest = require("../models/LabTest");
const LabTestPrice = require("../models/LabTestPrice");
const Hospital = require("../models/Hospital");

// Escape special characters so the search text is matched exactly as typed
const escapeRegex = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Sort options for the compare API (price is the default)
const sortOptions = {
    price: (a, b) => a.price - b.price,
    distance: (a, b) => a.distanceKm - b.distanceKm || a.price - b.price,
    turnaround: (a, b) => a.turnaroundHours - b.turnaroundHours || a.price - b.price
};

// GET all lab tests and search lab tests
const getLabTests = async (req, res, next) => {
    try {
        const { search, page = 1, limit = 20 } = req.query;

        const filter = {};

        // Search by lab test name, slug or category
        if (search) {
            const pattern = escapeRegex(String(search));

            filter.$or = [
                { name: { $regex: pattern, $options: "i" } },
                { slug: { $regex: pattern, $options: "i" } },
                { category: { $regex: pattern, $options: "i" } }
            ];
        }

        const labTests = await LabTest.find(filter)
            .sort({ name: 1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        const total = await LabTest.countDocuments(filter);

        res.status(200).json({
            success: true,
            total,
            page: Number(page),
            limit: Number(limit),
            data: labTests
        });

    } catch (error) {
        next(error);
    }
};

// GET single lab test by slug
const getLabTestBySlug = async (req, res, next) => {
    try {
        const labTest = await LabTest.findOne({
            slug: req.params.slug
        });

        if (!labTest) {
            return res.status(404).json({
                success: false,
                message: "Lab test not found"
            });
        }

        res.status(200).json({
            success: true,
            data: labTest
        });

    } catch (error) {
        next(error);
    }
};

// GET price comparison for a lab test by slug
const getLabTestComparison = async (req, res, next) => {
    try {
        // Sorting: ?sort=price (default), distance or turnaround
        const sort = String(req.query.sort || "price");

        if (!Object.prototype.hasOwnProperty.call(sortOptions, sort)) {
            return res.status(400).json({
                success: false,
                message: "Invalid sort option. Use price, distance or turnaround"
            });
        }

        const labTest = await LabTest.findOne({
            slug: req.params.slug
        });

        if (!labTest) {
            return res.status(404).json({
                success: false,
                message: "Lab test not found"
            });
        }

        // All prices for this lab test, with the hospital details filled in
        const prices = await LabTestPrice.find({ labTestId: labTest._id })
            .populate({
                path: "hospitalId",
                model: Hospital,
                select: "code name tagline logoText bgColor textColor accreditations avgRating totalReviews address distanceKm homeCollection labVisit"
            })
            .lean();

        // Lab test exists but has no price records yet
        if (prices.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No price records found for this lab test",
                data: {
                    test: labTest,
                    hospitals: []
                }
            });
        }

        // Lowest price, fastest turnaround and shortest distance
        const lowestPrice = Math.min(...prices.map((item) => item.price));
        const fewestHours = Math.min(...prices.map((item) => item.turnaroundHours));
        const shortestDistance = Math.min(
            ...prices
                .map((item) => item.hospitalId.distanceKm)
                .filter((distance) => typeof distance === "number")
        );

        // One flat row per hospital (all tied hospitals get the badge)
        const hospitals = prices.map((item) => {
            const hospital = item.hospitalId;
            const homeCollection = hospital.homeCollection || {};

            return {
                hospitalId: hospital.code,
                name: hospital.name,
                tagline: hospital.tagline,
                logoText: hospital.logoText,
                bgColor: hospital.bgColor,
                textColor: hospital.textColor,
                accreditations: hospital.accreditations,
                avgRating: hospital.avgRating,
                totalReviews: hospital.totalReviews,
                address: hospital.address,
                distanceKm: hospital.distanceKm,
                distanceLabel: typeof hospital.distanceKm === "number"
                    ? `${hospital.distanceKm.toFixed(1)} km away`
                    : undefined,
                price: item.price,
                mrp: labTest.mrp,
                discountPercent: labTest.mrp > 0
                    ? Math.round((1 - item.price / labTest.mrp) * 100)
                    : 0,
                turnaroundHours: item.turnaroundHours,
                turnaroundLabel: item.turnaroundLabel,
                homeCollection: {
                    ...homeCollection,
                    isFree: homeCollection.fee === 0
                },
                labVisit: hospital.labVisit,
                isBestPrice: item.price === lowestPrice,
                isFastest: item.turnaroundHours === fewestHours,
                isNearest: hospital.distanceKm === shortestDistance
            };
        });

        hospitals.sort(sortOptions[sort]);

        res.status(200).json({
            success: true,
            data: {
                test: labTest,
                hospitals
            }
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getLabTests,
    getLabTestBySlug,
    getLabTestComparison
};