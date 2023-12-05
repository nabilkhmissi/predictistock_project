const { company_controller } = require("../controllers");
const router = require("express").Router();

router.get("/", company_controller.findAll);
router.get("/:id", company_controller.findById);
router.post("/", company_controller.createCompany);
router.delete("/:id", company_controller.deleteCompany);
router.get("/client/:id", company_controller.findByClientId);


module.exports = router