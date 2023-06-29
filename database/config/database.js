"use strict";
require("dotenv/config");
const mysql2 = require('mysql2');

const config = {
  username: process.env.DB_USER || '',
  database: process.env.DB_NAME || '',
  password: process.env.DB_PASS || '',
  host: process.env.DB_HOST || 'db4free.net',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  dialectModule: mysql2,
  dialectOptions: {
    timezone: 'Z',
  },
  logging: true,
};

module.exports = config;
