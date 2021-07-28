import * as express from 'express';

import {
    testRouter
} from './adminRouters/_index';

/**
 * Create Express intance to manage Routes
 */
const adminRoute = express();

adminRoute.use('/test', testRouter);

export const adminRouter = adminRoute;