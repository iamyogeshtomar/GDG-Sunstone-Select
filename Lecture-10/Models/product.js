const { Schema, model } = require(`mongoose`);

const productSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    category: ["Electronics", "Eclectrical", "Edibles"],
});

module.exports = new model(`Product`, productSchema);

