import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

/**
 * 
 * @param res : Express response param
 * @param data : Data to send in response
 * @param code : Response code(in string), default is SUCCESS, Modify or change
 * @param statusCode : Response status code
 */
export function sendSuccess(res: Response, data: any = null, code: String = "SUCCESS", statusCode = StatusCodes.OK): void {
    res.status(statusCode).json({
        "status": true,
        "statusCode": statusCode,
        "code": code,
        "data": data
    });
}

/**
 * 
 * @param res : Express response param
 * @param error : Error ro send
 * @param code : Response code(in string), default is ERROR, Modify or change
 * @param statusCode : Response status code
 */
export function sendError(res: Response, error: Error, code: String = "ERROR", statusCode = StatusCodes.BAD_REQUEST): void {
    console.log("Error:", error);
    res.status(statusCode).json({
        "status": true,
        "statusCode": statusCode,
        "code": error.name || code,
        "error": error.message
    });
}