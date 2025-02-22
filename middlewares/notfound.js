import { StatusCodes } from "http-status-codes";
/**
 * @function
 * Middleware for handle anonymos path names
 * @param {import("express").Request} request 
 * @param {import("express").Response} response 
 * @param {import("express").NextFunction} next 
 */
const notFoundMiddleware = (request, response, next) => {
    const pathName = `${request.url}`
    return response.status(StatusCodes.NOT_FOUND).json({
        message: `Route <${pathName}> not found (404)`,
        timestamp: new Date().toISOString()
    })
}


export default notFoundMiddleware;