const router = require(`express`).Router();
const Product = require(`../Models/product.js`);
const User = require(`../Models/user.js`)
const { checkIfMerchant } = require(`../Middlewares/merchantAuthorization.js`);

router.get(`/`, async (req, res) => {
    const allProducts = await Product.find();
    res.json(allProducts);
});

router.post(`/`, checkIfMerchant, async (req, res) => {
    const { name, price, description, category } = req.body;
    const newProduct = await Product.create({ name, price, description, category });
    const author = await User.findById(req.user._id);
    author.products.push(newProduct);
    author.save();
    res.json(newProduct);
});

router.get(`/:id`, async (req, res) => {
    const singleProduct = await Product.findById(req.params.id);
    res.json(singleProduct);
});

router.put(`/:id`, checkIfMerchant, async (req, res) => {
    const { name, price, description, category } = req.body;
    const updatedProduct = await Product.findOneAndReplace({ _id: req.params.id }, { name, price, description, category });
    res.json(updatedProduct);
});

module.exports = router;