import * as express from 'express';
import * as compression from "compression";
import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import * as dotenv from "dotenv";
dotenv.config();

import { mediator } from './config/event.config';

import { ApiRoute } from './routes/_index';
import morganMiddleware from './config/morgan.config';

import Logger from './config/logger.config';

import * as dbo from './dbo/_index';

class App {

    public app: express.Application;
    private apiRoute: ApiRoute;

    constructor() {
        this.app = express();
        this.config();
    }

    config(): void {
        this.app.set("port", process.env.SERVER_PORT || 3000);
        this.app.use(cors({
            optionsSuccessStatus: 200
        }));
        this.app.use(compression());
        this.app.use(urlencoded({ extended: false }));
        this.app.use(json());
        this.app.use(morganMiddleware);

        this.initDatabase();
        this.upMediator();
    }

    initDatabase(): void {
        dbo.connect();
    }    

    upMediator(): void {
        mediator.once('db.ready', (db) => {
            Logger.info('[Mediator] Event: db.ready', db);
            this.initRoutes();
        });

        mediator.on('db.error', (error) => {
            Logger.error('[Mediator] Event: db.error', error);
            process.exit(1); // Process terminated
        });
    }

    initRoutes(): void {
        this.apiRoute = new ApiRoute(this.app);
        this.apiRoute.setupRoutes();
    }

}

export default new App().app;