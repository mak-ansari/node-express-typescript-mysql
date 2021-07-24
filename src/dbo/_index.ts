import { Sequelize } from 'sequelize';
import { DbConfig } from '../config/db.config';
import Logger from '../config/logger.config';


const dbConfig = DbConfig[process.env.NODE_ENV];

const additionalSettings = {
    freezeTableName: true,
    benchmark: true,
    logging: (msg:string, timing: number) => Logger.info(`${msg} | Elapsed time: ${timing}ms`)
};

const sequelize = new Sequelize(
    dbConfig['database'],
    dbConfig['username'],
    dbConfig['password'],
    {...additionalSettings, ...dbConfig}
)

sequelize.authenticate()
    .then(() => {
        Logger.info(`Connected Database : ${dbConfig["database"]}`);
    })
    .catch((error) => {
        Logger.error('Unable to connect to the database:', error);
        Logger.error('Process terminated!!!');
        process.exit(); 
        // throw error;
    });

export default sequelize;


// https://gorrion.io/blog/node-express-js-typescript-sequelize/
// https://rsseau.fr/en/programming/2019/06/19/express-typescript.html

/*
const additionalSettings = {
    freezeTableName: true,
    benchmark: true,
    logging: console.log
    host: config.host,
    port: config.port,
    dialect: 'mysql',
    timezone: '+04:00', //Default `+00:00` to manage data as per timezone //Update timezone to avaod timezone issue, temp solution UAE
    freezeTableName: true,
    operatorsAliases: false, //http://docs.sequelizejs.com/manual/tutorial/querying.html#operators security issue
    benchmark: true, //True: Show query execution time in console
    logging: false, //True: Show execute query in console
    //logging: console.log
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        socketPath: "/var/run/mysqld/mysqld.sock"
    },
    // For Master/slave concept
    replication: {
        read: [
            { host: config.host, username: config.username, password: config.password, port: config.port },
            { host: config.host, username: config.username, password: config.password, port: config.port }
        ],
        write: { host: config.host, username: config.username, password: config.password, port: config.port }
    },
};
*/