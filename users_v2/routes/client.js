const { client_controller } = require("../controllers");
const router = require("express").Router();

router.get("/", client_controller.findAll);
router.put("/:id", client_controller.update);
router.get("/:id", client_controller.findById);
router.delete("/:id", client_controller.deleteUser);
router.get("/dashboard/client/:clientId", client_controller.getDashboard);


module.exports = router