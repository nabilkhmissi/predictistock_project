const { mongoose } = require("mongoose");


const db_url = 'mongodb://root:root@localhost:27018/client_db?authSource=admin';
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected..."));