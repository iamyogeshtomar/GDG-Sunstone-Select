const Product = require(`../Models/product.js`);

const checkIfMerchant = (req, res, next) => {
    // console.log(`Reached Merchant`);
    if (req.user.role === "Merchant") {
        next();
    } else {
        return res.send(`<h1>You're not authorised!!!</h1>`);
    }
};

const checkCorrectOwner = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    // console.log(product.author.toString());
    // console.log(req.user._id);
    // console.log(req.user.toString() == product.author.toString());
    // console.log(`Reached correct owner`);
    const productId = product.author.toString();
    if (!product) {
        return res.send(`<h1>Invalid Product</h1>`);
    }
    if (productId == req.user._id) {
        next();
    }
    else {
        return res.send(`<h1>Invalid Authorization</h1>`);
    }
};

module.exports = { checkIfMerchant, checkCorrectOwner };