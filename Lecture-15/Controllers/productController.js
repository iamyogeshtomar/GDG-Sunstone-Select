const User = require(`../Models/user.js`);
const Product = require(`../Models/product.js`);

const getAllProducts = async (req, res) => {
    const allProducts = await Product.find();
    res.json(allProducts);
};

const addNewProduct = async (req, res) => {
    const { name, price, description, category } = req.body;
    const newProduct = await Product.create({ name, price, description, category });
    newProduct.author = req.user._id;
    await newProduct.save();
    const author = await User.findById(req.user._id);
    author.products.push(newProduct);
    author.save();
    res.json(newProduct);
};

const getSingleProduct = async (req, res) => {
    const singleProduct = await Product.findById(req.params.id);
    res.json(singleProduct);
};

const editProduct = async (req, res) => {
    const { name, price, description, category } = req.body;
    const updatedProduct = await Product.findOneAndReplace({ _id: req.params.id }, { name, price, description, category });
    res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
    // console.log(`Reached delete route`);
    await Product.deleteOne({ _id: req.params.id });
    res.redirect(`/products`);
};

module.exports = { getAllProducts, addNewProduct, editProduct, deleteProduct, getSingleProduct };