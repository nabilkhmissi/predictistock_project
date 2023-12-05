const { SubscriptionTypeModel } = require("../models");

const findAll = async (req, res, next) => {
    try {
        const subscriptions = await SubscriptionTypeModel.find({});
        res.status(200).send({ data: subscriptions, message: "subscriptions types retrieved successfully" });
    } catch (error) {
        next(error);
    }
}

const createSubsType = async (req, res, next) => {
    try {
        type = await SubscriptionTypeModel.create(req.body);
        res.status(200).send({ data: type, message: "Type created successfully" });
    } catch (error) {
        next(error);
    }
}

const findById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const filter = { _id: id };

        const company = await SubscriptionTypeModel.findOne(filter);
        res.status(200).send({ data: company, message: "Type retrieved successfully" });
    } catch (error) {
        next(error);
    }
}


const deleteSubsType = async (req, res, next) => {
    try {
        const { id } = req.params;

        const filter = { _id: id };

        const type = await SubscriptionTypeModel.deleteOne(filter);
        res.status(200).send({ data: "Subscription type deleted successfully !", message: "Type deleted successfully" });
    } catch (error) {
        next(error);
    }
}

module.exports = { findAll, findById, deleteSubsType, createSubsType };