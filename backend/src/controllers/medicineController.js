const Medicine = require("../models/Medicine");
const MedicinePrice = require("../models/MedicinePrice");
const Store = require("../models/Store");

// GET all medicines and search medicines
const getMedicines = async (req, res, next) => {
    try {
        const { search, page = 1, limit = 20 } = req.query;

        const filter = {};

        // Search by medicine name, generic name or slug
        if (search) {
            filter.$or = [
                { name: { $regex: search, $options: "i" } },
                { genericName: { $regex: search, $options: "i" } },
                { slug: { $regex: search, $options: "i" } }
            ];
        }

        const medicines = await Medicine.find(filter)
            .sort({ name: 1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));

        const total = await Medicine.countDocuments(filter);

        res.status(200).json({
            success: true,
            total,
            page: Number(page),
            limit: Number(limit),
            data: medicines
        });

    } catch (error) {
        next(error);
    }
};

// GET single medicine by slug
const getMedicineBySlug = async (req, res, next) => {
    try {
        const medicine = await Medicine.findOne({
            slug: req.params.slug
        });

        if (!medicine) {
            return res.status(404).json({
                success: false,
                message: "Medicine not found"
            });
        }

        res.status(200).json({
            success: true,
            data: medicine
        });

    } catch (error) {
        next(error);
    }
};

// GET price comparison for a medicine by slug
const getMedicineComparison = async (req, res, next) => {
    try {
        const medicine = await Medicine.findOne({
            slug: req.params.slug
        });

        if (!medicine) {
            return res.status(404).json({
                success: false,
                message: "Medicine not found"
            });
        }

        // All prices for this medicine, with the store details filled in
        const prices = await MedicinePrice.find({ medicineId: medicine._id })
            .populate({
                path: "storeId",
                model: Store,
                select: "name logoText bgColor textColor avgRating totalReviews"
            })
            .lean();

        // Medicine exists but has no price records yet
        if (prices.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No price records found for this medicine",
                data: {
                    medicine,
                    stores: []
                }
            });
        }

        // In-stock and limited-stock stores first (cheapest first),
        // then out-of-stock stores (also cheapest first)
        prices.sort((a, b) => {
            const aOut = a.stock === "out" ? 1 : 0;
            const bOut = b.stock === "out" ? 1 : 0;
            return aOut - bOut || a.price - b.price;
        });

        // The first row is the cheapest available store, so it is the best price
        const stores = prices.map((item, index) => ({
            storeId: item.storeId,
            price: item.price,
            mrp: medicine.mrp,
            stock: item.stock,
            delivery: item.delivery,
            isBest: index === 0 && item.stock !== "out"
        }));

        res.status(200).json({
            success: true,
            data: {
                medicine,
                stores
            }
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getMedicines,
    getMedicineBySlug,
    getMedicineComparison
};