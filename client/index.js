const express = require("express");
const app = express();
const {
    CustomerController,
    ActivityController,
    CustomerOrderController
} = require("./controller");
const cors = require("cors");
require("./db/connect")

app.use(cors())
app.use(express.json())
CustomerController(app);
ActivityController(app);
CustomerOrderController(app);

app.listen(3001, () => {
    console.clear();
    console.log("clients app listening on port 3001")
})