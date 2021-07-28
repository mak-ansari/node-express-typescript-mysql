import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sendSuccess, sendError } from "../helper/responseHelper";

import { TestModelHelper } from "../dbo/helpers/test.model.helper";
const testModelHelper = new TestModelHelper();

export class TestController {

    public async index(req: Request, res: Response) {

        try {
            const data = await testModelHelper.findAllTest();
            sendSuccess(res, data);

        } catch (error) {
            sendError(res, error, error.code, StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    public async getTestData(req: Request, res: Response) {
        
        try {
            const data = {'data': "xxasa"};
            sendSuccess(res, data);

        } catch (error) {
            sendError(res, error, error.code, StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    public async getTestList(req: Request, res: Response) {
        
        try {
            
            const data = await testModelHelper.findAllTest();
            sendSuccess(res, data);

        } catch (error) {
            sendError(res, error, error.code, StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

}