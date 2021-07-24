export const DbConfig = {
    "development": {
        "username": process.env.DB_MYSQL_USERNAME,
        "password": process.env.DB_MYSQL_PASSWORD,
        "database": process.env.DB_MYSQL_DBNAME,
        "host": process.env.DB_MYSQL_HOSTNAME,
        "port": 3306,
        "dialect": "mysql",
        "force": true,
        "timezone": "+00:00",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    },
    "production": {
        "username": process.env.DB_MYSQL_USERNAME,
        "password": process.env.DB_MYSQL_PASSWORD,
        "database": process.env.DB_MYSQL_DBNAME,
        "host": process.env.DB_MYSQL_HOSTNAME,
        "port": 3306,
        "dialect": "mysql",
        "force": true,
        "timezone": "+00:00",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    }
}