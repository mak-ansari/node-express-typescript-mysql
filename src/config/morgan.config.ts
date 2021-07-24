import * as morgan from 'morgan';
import { StreamOptions } from "morgan";


import Logger from "./logger.config";

// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
const stream: StreamOptions = {
    // Use the http severity
    write: (message:any) => Logger.http(message),
};


// Skip all the Morgan http log if the 
// application is not running in development mode.
// This method is not really needed here since 
// we already told to the logger that it should print
// only warning and error messages in production.
const skip = () => {
    const env = process.env.NODE_ENV || "development";
    return env !== "development";
};


// Build the morgan middleware
const morganMiddleware = morgan(
    // Define message format string (this is the default one).
    // The message format is made from tokens, and each token is
    // defined inside the Morgan library.
    // You can create your custom token to show what do you want from a request.
    '[:remote-addr] :status [:method] :url [:res[content-length]]bytes [:response-time]ms',
    // Options: in this case, I overwrote the stream and the skip logic.
    // See the methods above.
    { stream }
);


export default morganMiddleware;

//https://levelup.gitconnected.com/better-logs-for-expressjs-using-winston-and-morgan-with-typescript-1c31c1ab9342