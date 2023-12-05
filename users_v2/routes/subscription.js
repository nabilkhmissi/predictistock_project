const { subscription_controller } = require("../controllers");
const router = require("express").Router();

router.get("/company/:companyId/history", subscription_controller.findSubscriptionHistoryByCompanyId);
router.get("/company/:companyId", subscription_controller.findActiveByCompanyId);


module.exports = router