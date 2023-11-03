module.exports = class ApiError extends Error {
    constructor(message, status) {
        super(message)
        this.status = status || 500
    }
}