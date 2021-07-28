import * as Joi from "joi";
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sendError } from "../responseHelper";
import { validationOptions } from "./_index";

//add imput data validation
export class TestValidator {

    public async testCreateValidator(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = Joi.object({
                id: Joi.number().required()
            });
            await schema.validateAsync(req.body, validationOptions);
            next();
        } catch (error) {
            sendError(res, error, error.code, StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
