const express = require("express");
const app = express();
const {
    CustomerController,
    ActivityController,
    CustomerOrderController
} = require("./controller");
const cors = require("cors");
require("./db/connect");
const config = require('./config/config')

app.use(cors())
app.use(express.json())
CustomerController(app);
ActivityController(app);
CustomerOrderController(app);

const PORT = config.PORT;
app.listen(PORT, () => {
    console.clear();
    console.log("clients app listening on port " + PORT)
})