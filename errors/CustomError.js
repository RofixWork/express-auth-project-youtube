class CustomError extends Error {
    /**
     * @constructor
     * @param {string} message
     * @param {number} statusCode
     * @returns {void}
     */
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
export default CustomError;