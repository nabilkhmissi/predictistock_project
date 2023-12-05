const { SubscriptionModel } = require("../models");

const findSubscriptionHistoryByCompanyId = async (req, res, next) => {
    try {
        const { companyId } = req.params;
        const subscriptions = await SubscriptionModel.find({ company: companyId });
        res.status(200).send({ data: subscriptions, message: "subscriptions types retrieved successfully" });
    } catch (error) {
        next(error);
    }
}

const findActiveByCompanyId = async (req, res, next) => {
    try {
        const { companyId } = req.params;
        const subscriptions = await SubscriptionModel.find({ company: companyId, active: true });
        res.status(200).send({ data: subscriptions, message: "active subscriptions types retrieved successfully" });
    } catch (error) {
        next(error);
    }
}

module.exports = { findSubscriptionHistoryByCompanyId, findActiveByCompanyId };