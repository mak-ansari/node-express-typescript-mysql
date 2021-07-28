export const Config = {
    "development": {
        "NODE_ENV": process.env.NODE_ENV,
        "MONGODB_URI": process.env.MONGODB_URI,
        "SERVER_PORT": process.env.SERVER_PORT,
        "host": process.env.DB_MYSQL_HOSTNAME,
        "port": 3306
    },
    "production": {
        
    }
}