const { auth_controller } = require("../controllers");
const router = require("express").Router();

router.post("/login", auth_controller.login);
router.post("/signup", auth_controller.signup);


module.exports = router