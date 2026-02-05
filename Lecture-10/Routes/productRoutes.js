const router = require(`express`).Router();
const Product = require(`../Models/product.js`);

router.get(`/products`, async (req, res) => {
    const allProducts = await Product.find();
    res.json(allProducts);
});

router.post(`/products`, async (req, res) => {
    const { name, price, description, category } = req.body;
    const newProduct = await Product.create({ name, price, description, category });
    res.json(newProduct);
});

module.exports = router;