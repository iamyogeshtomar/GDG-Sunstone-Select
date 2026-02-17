const { Schema, model } = require(`mongoose`);
const User = require(`./user.js`);

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
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, { timestamps: true });


// To be fixed later
productSchema.pre(`deleteOne`, { document: true }, async function (next) {
    const author = await User.findById(this.author);
    console.log(author);
    author.products = author.products.filter((id) => { return id != this.author; });
    await author.save();
    next();
});

module.exports = new model(`Product`, productSchema);

