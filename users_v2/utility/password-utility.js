const bcrypt = require("bcrypt");

const genSalt = async () => {
    return await bcrypt.genSalt(10);
}

const hashPassword = async (password, salt) => {
    return await bcrypt.hash(password, salt)
}


const validatePassword = async (entered_password, hashed_password, salt) => {
    return await hashPassword(entered_password, salt) === hashed_password;

}

module.exports = {
    genSalt, hashPassword, validatePassword
}