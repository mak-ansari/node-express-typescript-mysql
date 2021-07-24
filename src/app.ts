import * as express from 'express';
import * as compression from "compression";  // compresses requests
import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import * as dotenv from "dotenv";
dotenv.config();

import { ApiRoute } from './routes/_index';
import morganMiddleware from './config/morgan.config';

class App {

    public app: express.Application;
    private apiRoute: ApiRoute;

    constructor() {
        this.app = express();
        this.config();
        this.initRoutes();
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
    }

    initRoutes(): void {
        this.apiRoute = new ApiRoute(this.app);
        this.apiRoute.setupRoutes();
    }
}

export default new App().app;