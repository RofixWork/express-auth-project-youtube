import { StatusCodes } from "http-status-codes";
import CustomError from "./CustomError.js";

class NotFoundAPIError extends CustomError {
    constructor(message) {
        super(message, StatusCodes.NOT_FOUND);
    }
}
export default NotFoundAPIError