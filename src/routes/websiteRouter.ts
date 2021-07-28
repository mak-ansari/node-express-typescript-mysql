import * as express from 'express';

import {
    testRouter
} from './websiteRouters/_index';

/**
 * Create Express intance to manage Routes
 */
const websiteRoute = express();

websiteRoute.use('/test', testRouter);

export const websiteRouter = websiteRoute;