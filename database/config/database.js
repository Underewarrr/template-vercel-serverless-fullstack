"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'db_pxa',
    database: process.env.DB_NAME || 'db_pxa',
    password: process.env.DB_PASS || '2t2d3MeFswJ6Jk2w',
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: true,
};
module.exports = config;
//# sourceMappingURL=database.js.map