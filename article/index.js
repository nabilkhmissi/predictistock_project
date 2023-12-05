const express = require("express");
const app = express();
const {
    ArticleController,
    CategoryController,
    SupplierController,
    CompanyOrderController
} = require("./controller");
const cors = require("cors");
require("./db/connect")
const config = require("./config/config");

app.use(cors())
app.use(express.json())
ArticleController(app);
CategoryController(app);
SupplierController(app);
CompanyOrderController(app);

const PORT = config.PORT;
app.listen(PORT, () => {
    console.clear();
    console.log("app listening on port " + PORT);
})