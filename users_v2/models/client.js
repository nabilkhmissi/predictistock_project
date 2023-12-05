const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const ClientSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        salt: { type: String, required: true },
        role: { type: String },
    },
    {
        timestamps: true
    }
);

ClientSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    delete obj.salt
    delete obj.createdAt
    delete obj.updatedAt
    delete obj.__v
    return obj;
}
module.exports = mongoose.model('client', ClientSchema);