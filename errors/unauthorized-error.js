import { StatusCodes } from "http-status-codes";
import CustomError from "./CustomError.js";

class UnAuthrizedAPIError extends CustomError {
    constructor(message) {
        super(message, StatusCodes.UNAUTHORIZED);
    }
}
export default UnAuthrizedAPIError