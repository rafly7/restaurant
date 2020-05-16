const Sequlize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config()

const connection = new Sequlize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
        dialect: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: process.env.DB
    }
)
module.exports = connection;