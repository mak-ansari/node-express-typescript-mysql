import app from './app';
import Logger from './config/logger.config';

const PORT = process.env.SERVER_PORT;
var http = require('http').Server(app);

http.listen(PORT, () => {
    Logger.info(`Express server is listening on PORT: ${PORT}`);
});