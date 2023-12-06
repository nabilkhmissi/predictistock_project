const express = require('express');
const app = express();
const config = require("./config/config");
const { auth_route, client_route, company_route, subscription_route, subscription_type_route } = require("./routes")
const connect_db = require("./config/db_connect");
const cors = require("cors");
const errorHandler = require('./utility/error-handler');

const PORT = config.PORT;
app.use(cors());
connect_db();
app.use(express.json());
app.use("/auth", auth_route);
app.use("/client", client_route);
app.use("/company", company_route);
app.use("/subscription-type", subscription_type_route);
app.use("/subscription", subscription_route);
app.use(errorHandler);

app.listen(PORT, () => console.log("USER MICROSERVICE IS LISTENING ON PORT " + PORT));