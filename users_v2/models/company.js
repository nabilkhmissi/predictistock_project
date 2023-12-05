const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const CompanySchema = new Schema(
    {
        name: { type: String, required: true },
        client: { type: Schema.Types.ObjectId, ref: 'client' }
    },
    {
        timestamps: true
    }
);

CompanySchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.createdAt
    delete obj.updatedAt
    delete obj.__v
    return obj;
}
module.exports = mongoose.model('company', CompanySchema);