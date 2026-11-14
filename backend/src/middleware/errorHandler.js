// 404 handler for routes that do not exist.
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`
    });
};

// Central error handler. Express 5 forwards errors from async handlers here.
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    const statusCode = err.status || err.statusCode || 500;

    if (statusCode >= 500) {
        console.error(err);
    }

    res.status(statusCode).json({
        success: false,
        message: statusCode >= 500 ? "Internal server error" : err.message
    });
};

module.exports = { notFound, errorHandler };