const { Schema, model } = require(`mongoose`);

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 90,
        unique: true,
        trim: true,
    },
    price: {
        type: Number,
        min: 0,
    },
    description: {
        type: String,
        default: "No description available at the moment!!!",
        trim: true,
    },
    category: {
        type: String,
        enum: ["Cosmetics", "Apparels", "Electronics", "Other"],
        default: "Other",
    },
}, { timestamps: true });

module.exports = new model(`Product`, productSchema);

