import { StatusCodes } from "http-status-codes";
import CustomError from "./CustomError.js";

class BadRequestAPIError extends CustomError {
    constructor(message) {
        super(message, StatusCodes.BAD_REQUEST);
    }
}
export default BadRequestAPIError