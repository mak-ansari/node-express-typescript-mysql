import { createServer }  from 'http';

import app from './app';
import Logger from './config/logger.config';
import { mediator } from './config/event.config';

mediator.once('route.ready', (data) => {
    Logger.info('[Mediator] Event: route.ready', data);

    const server = createServer(app);
    const PORT = process.env.SERVER_PORT;
    server.listen(PORT, () => {
        Logger.debug(`Environment: ${process.env.NODE_ENV}`);
        Logger.info(`Express server is listening on PORT: ${PORT}`);
    });
});