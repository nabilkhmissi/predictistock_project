const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const SubscriptionTypeSchema = new Schema(
    {
        amount: { type: Number, required: true },
        duration: { type: Number, required: true },
        allowedArticleNumbers: { type: Number, required: true },

    },
    {
        timestamps: true
    }
);

SubscriptionTypeSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.createdAt
    delete obj.updatedAt
    delete obj.__v
    return obj;
}
module.exports = mongoose.model('subscription-type', SubscriptionTypeSchema);