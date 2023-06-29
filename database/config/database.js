"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'data_db_user',
    database: process.env.DB_NAME || 'data_db',
    password: process.env.DB_PASS || '525240rA@',
    host: process.env.DB_HOST || 'www.db4free.net',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: true,
};
module.exports = config;
//# sourceMappingURL=database.js.map