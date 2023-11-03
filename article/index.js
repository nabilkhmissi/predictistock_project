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

app.use(cors())
app.use(express.json())
ArticleController(app);
CategoryController(app);
SupplierController(app);
CompanyOrderController(app);

app.listen(3000, () => {
    console.clear();
    console.log("app listening on port 3000")
})