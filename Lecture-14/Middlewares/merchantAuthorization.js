// const jwt = require(`jsonwebtoken`);
// const User = require(`../Models/user.js`);
const Product = require(`../Models/product.js`);

const checkIfMerchant = (req, res, next) => {
    if (req.user.role === "Merchant") {
        next();
    } else {
        return res.send(`<h1>You're not authorised!!!</h1>`);
    }
};

const checkCorrectOwner = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    console.log(product.author);
    console.log(req.user._id);
    console.log(req.user === product.author);
    if (!Product) {
        return res.send(`<h1>Invalid Product</h1>`);
    }
    if (product.author === req.user._id) {
        next();
    }
    else {
        return res.send(`<h1>Invalid Authorization</h1>`);
    }
};

module.exports = { checkIfMerchant, checkCorrectOwner };