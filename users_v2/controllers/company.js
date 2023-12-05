const { CompanyModel } = require("../models");

const findAll = async (req, res, next) => {
    try {
        companies = await CompanyModel.find({});
        res.status(200).send({ data: companies, message: "companies retrieved successfully" });
    } catch (error) {
        next(error);
    }
}

const createCompany = async (req, res, next) => {
    try {
        company = await CompanyModel.create(req.body);
        res.status(200).send({ data: company, message: "company created successfully" });
    } catch (error) {
        next(error);
    }
}


const findById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const filter = { _id: id };

        const company = await CompanyModel.findOne(filter);
        res.status(200).send({ data: company, message: "company retrieved successfully" });
    } catch (error) {
        next(error);
    }
}



const findByClientId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const companies = await CompanyModel.findOne({ client: id });
        res.status(200).send({ data: companies, message: "companies retrieved successfully" });
    } catch (error) {
        next(error);
    }
}
const deleteCompany = async (req, res, next) => {
    try {
        const { id } = req.params;

        const filter = { _id: id };

        const user = await CompanyModel.deleteOne(filter);
        res.status(200).send({ data: user, message: "company deleted successfully" });
    } catch (error) {
        next(error);
    }
}

module.exports = { findAll, findById, deleteCompany, createCompany, findByClientId };