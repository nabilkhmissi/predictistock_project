const dotenv = require("dotenv");
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    MAIN_URL: process.env.MAIN_URL,
    GATEWAY_PORT: process.env.GATEWAY_PORT,
    USER_PORT: process.env.USER_PORT,
    ARTICLE_PORT: process.env.ARTICLE_PORT,
    CLIENT_PORT: process.env.CLIENT_PORT,

    NODE_ENV: process.env.NODE_ENV
}