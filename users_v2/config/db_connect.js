const mongoose = require("mongoose");
const config = require("./config")

module.exports = connect_db = () => {
    mongoose.connect(config.DB_URL)
        .then(() => console.log("DB CONNECTED..."))
        .catch(() => console.log("ERROR WHILE CONNECTING TO DB"));
}