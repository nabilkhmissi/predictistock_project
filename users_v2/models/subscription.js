const mongoose = require("mongoose")


const Schema = mongoose.Schema;
const SubscriptionSchema = new Schema(
    {
        date: { type: Date, default: Date.now() },
        endDate: { type: Date },
        active: { type: Boolean, default: false },
        subscriptionType: { type: { type: Schema.Types.ObjectId, ref: 'subscription-type' } },
        company: { type: Schema.Types.ObjectId, ref: 'company' }
    },
    {
        timestamps: true
    }
);

SubscriptionSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.createdAt
    delete obj.updatedAt
    delete obj.__v
    return obj;
}
module.exports = mongoose.model('subscription', SubscriptionSchema);