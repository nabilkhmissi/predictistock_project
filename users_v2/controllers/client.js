const { ClientModel, CompanyModel, SubscriptionTypeModel, SubscriptionModel } = require("../models");

const findAll = async (req, res, next) => {
    try {
        const { search } = req.query;
        var users;
        if (search) {
            users = await ClientModel.find({ name: { $regex: search, $options: 'i' } });
        } else {
            users = await ClientModel.find({});
        }
        res.status(200).send({ data: users, message: "clients retrieved successfully" });
    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { modified_name } = req.body;


        const filter = { _id: id };
        const update = { $set: { name: modified_name } };

        const modified_user = await ClientModel.updateOne(filter, update);
        res.status(200).send({ data: "user updated successfully", message: "user updated successfully" });
    } catch (error) {
        next(error);
    }
}


const findById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const filter = { _id: id };

        const user = await ClientModel.findOne(filter);
        res.status(200).send({ data: user, message: "user retrieved successfully" });
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const filter = { _id: id };

        const user = await ClientModel.deleteOne(filter);
        res.status(200).send({ data: user, message: "user deleted successfully" });
    } catch (error) {
        next(error);
    }
}

const getDashboard = async (req, res, next) => {
    try {
        const { clientId } = req.params;
        const companies = await CompanyModel.find({ client: clientId });
        const subscription = await SubscriptionModel.find({ "company.client._id": clientId });
        const orders = 0;
        const customers = 0;
        const articles = 0;
        res.status(200).send({
            data: {
                article: articles,
                order: orders,
                subscriptions: subscription.length,
                customers: customers,
                companies: companies.length
            },
            message: "user deleted successfully"
        });
    } catch (error) {
        next(error);
    }
}



module.exports = { findAll, update, findById, deleteUser, getDashboard };