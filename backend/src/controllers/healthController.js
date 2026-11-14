// Health check handler.
const getHealth = (req, res) => {
    res.status(200).json({
        success: true,
        message: "MedCompare Backend is running!",
        status: "Healthy"
    });
};

module.exports = { getHealth };