import { StatusCodes } from "http-status-codes";

/**
 * @typedef {import("express").Request} REQUEST
 * @typedef {import("express").Response} RESPONSE
 */

class AuthController {
    /**
     * Register
     * @param {REQUEST} request
     * @param {RESPONSE} response
     * @returns {RESPONSE}
     */
    static async register(request, response) {
        return response.status(StatusCodes.CREATED).json('created');
    }

     /**
     * Register
     * @param {REQUEST} request
     * @param {RESPONSE} response
     * @returns {RESPONSE}
     */
     static async login(request, response) {
        return response.status(StatusCodes.CREATED).json('login');
    }

     /**
     * Register
     * @param {REQUEST} request
     * @param {RESPONSE} response
     * @returns {RESPONSE}
     */
     static async logout(request, response) {
        return response.status(StatusCodes.CREATED).json('logout');
    }
}

export default AuthController;