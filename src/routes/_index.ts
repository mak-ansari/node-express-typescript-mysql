import { Application, Request, Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

import { testRouter } from './test.Router';

export class ApiRoute {

    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    public setupRoutes(): void {

        this.app.get('/', (req: Request, res: Response) => res.status(StatusCodes.OK).send({
            message: getReasonPhrase(StatusCodes.OK)
        }));

        this.app.use('/test-api', testRouter);

        this.app.all('*', (req: Request, res: Response) => res.status(StatusCodes.NOT_FOUND).send({
            statusCode: StatusCodes.NOT_FOUND,
            error: getReasonPhrase(StatusCodes.NOT_FOUND)
        }));
    }
}