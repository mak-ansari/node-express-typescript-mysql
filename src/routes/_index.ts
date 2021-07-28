import { Application, Request, Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

import { mediator } from './../config/event.config';

import { adminRouter } from './adminRouter';
import { websiteRouter } from './websiteRouter';

export class ApiRoute {

    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    public setupRoutes(): void {

        this.app.get('/', (req: Request, res: Response) => res.status(StatusCodes.OK).send({
            message: getReasonPhrase(StatusCodes.OK)
        }));

        this.app.use('/admin-api', adminRouter);
        this.app.use('/web-api', websiteRouter);

        this.app.all('*', (req: Request, res: Response) => res.status(StatusCodes.NOT_FOUND).send({
            statusCode: StatusCodes.NOT_FOUND,
            error: getReasonPhrase(StatusCodes.NOT_FOUND)
        }));

        mediator.emit('route.ready', this.app);
    }
}