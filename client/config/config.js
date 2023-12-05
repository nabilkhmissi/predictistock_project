const dotenv = require("dotenv");
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    API_URL: process.env.API_URL,
    PORT: process.env.PORT,

    NODE_ENV: process.env.NODE_ENV
}