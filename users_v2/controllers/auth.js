const { generate_signature } = require("../utility/jwt")
const password_utility = require("../utility/password-utility");
const { ClientModel } = require("../models")

const login = async (req, res, next) => {
    console.log("LOGIN REQUEST");
    const { email, password } = req.body;
    try {
        const client = await ClientModel.findOne({ email: email });
        if (!client) {
            throw new Error("Client with this email not found")
        }

        const validatePassword = await password_utility.validatePassword(password, client.password, client.salt);
        if (!validatePassword) {
            throw new Error("Invalid creadentials")
        }
        const { _id, name } = client;
        const signature = generate_signature({ _id, name, email });

        res.status(200).send({ message: "authenticated succesfully", data: { token: signature, client } })
    } catch (error) {
        next(error)
    }
}

const signup = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw new Error("Invalid creadentials")
    }

    const existClient = await ClientModel.findOne({ email });
    if (existClient) {
        throw new Error("Invalid credentials")
    }
    const salt = await password_utility.genSalt();
    const userPassword = await password_utility.hashPassword(password, salt)

    const new_client = await ClientModel.create({
        name,
        email,
        role: "Client",
        password: userPassword,
        salt: salt
    });
    res.status(200).send({ data: "Account created successfully" })
}


module.exports = { login, signup }