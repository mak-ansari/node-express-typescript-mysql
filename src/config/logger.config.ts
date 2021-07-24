import * as winston from 'winston';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
}

const level = () => {
    const env = process.env.NODE_ENV || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
}

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    // winston.format.colorize({ all: true }),
    winston.format.align(),
    winston.format.printf(
        (info) => `[${info.timestamp}] [${info.level}]: ${info.message}`,
    )
);

const formatDate = () => {
    let d = new Date();
    let month = '' + (d.getUTCMonth() + 1);
    let day = '' + d.getUTCDate();
    let year = d.getUTCFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: `logs/${formatDate()}/error.log`,
        level: 'error',
    }),
    new winston.transports.File({ filename: `logs/${formatDate()}/all.log` }),
];

const exceptionHandlers = [
    new winston.transports.Console(),
    new winston.transports.File({ filename: `logs/${formatDate()}/exceptions.log` }),
];

const Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
    exceptionHandlers,
});

export default Logger;