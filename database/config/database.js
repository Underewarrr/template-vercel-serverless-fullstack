import mysql2 from 'mysql2'; // Fix : problema ao lançar mysql no webpack vercel serverless


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'opentibiacourse',
    database: process.env.DB_NAME || 'opentibiacourse',
    password: process.env.DB_PASS || 'dbrafhaeloliveirarA@',
    host: process.env.DB_HOST || 'db4free.net',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectModule: mysql2, // Fix : problema ao lançar mysql no webpack vercel serverless
    dialectOptions: {
        timezone: 'Z',
    },
    logging: true,
};
module.exports = config;
//# sourceMappingURL=database.js.map