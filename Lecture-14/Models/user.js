const { Schema, model } = require(`mongoose`);
const Product = require(`./product.js`);

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        minlength: 2,
    },
    name: {
        type: String,
        trim: true,
        minlength: 2,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
    },
    mobile: {
        type: Number,
        min: 1000000000,
        max: 9999999999,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: [`Intern`, `Associate`, `Manager`, `Architect`, `President`, `Shareholders`, `Customer`, `Merchant`],
        default: `Intern`,
        required: true,
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: Product,
    }],
}, { timestamps: true });

userSchema.pre(`deleteOne`, async function (next) {
    await Product.deleteMany({ author: this._id });
    next();
});

module.exports = new model(`User`, userSchema);