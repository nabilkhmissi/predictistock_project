const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
    {
        name: String,
        companyId: String,
        description: String,
        quantity: Number,
        price: Number,
        predictedQuantity: { type: Number, default: 10 },
        category: { type: Schema.Types.ObjectId, ref: 'category' }
    },
    {
        timestamps: true
    }
);

ArticleSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.createdAt
    delete obj.updatedAt
    delete obj.__v
    return obj;
}

module.exports = mongoose.model('article', ArticleSchema);