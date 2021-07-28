
import * as mongoose from "mongoose";
import { Connection } from "mongoose";

import { Config } from '../config/config';
import Logger from '../config/logger.config';
import { mediator } from '../config/event.config';

const config = Config[process.env.NODE_ENV];

export const connect = (): void => {
    
    mongoose.connect(config['MONGODB_URI'], {
        useNewUrlParser: true,
        useCreateIndex: true
    });
    
    mongoose.set("debug", (collectionName:string, method:string, query:any, doc) => {
        Logger.debug(`[${collectionName}.${method}]`, [JSON.stringify(query)], [doc]);
    });

    const DbConnection:Connection = mongoose.connection;
    DbConnection.on('error', (err) => {
        Logger.error('Error connecting to mongoDB: ', err);
        mediator.emit('db.error', err);
    });
    DbConnection.on('open', () => {
        Logger.info('Connection established to mongoDB.');
        mediator.emit('db.ready', DbConnection)
    });
}