const { subscription_type_controller } = require("../controllers");
const router = require("express").Router();

router.get("/", subscription_type_controller.findAll);
router.get("/:id", subscription_type_controller.findById);
router.post("/", subscription_type_controller.createSubsType);
router.delete("/:id", subscription_type_controller.deleteSubsType);


module.exports = router