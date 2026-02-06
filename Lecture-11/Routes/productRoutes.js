const router = require(`express`).Router();
const Product = require(`../Models/product.js`);

router.get(`/`, async (req, res) => {
    const allProducts = await Product.find();
    res.json(allProducts);
});

router.post(`/`, async (req, res) => {
    const { name, price, description, category } = req.body;
    const newProduct = await Product.create({ name, price, description, category });
    res.json(newProduct);
});

router.get(`/:id`, async (req, res) => {
    const singleProduct = await Product.findById(req.params.id);
    res.json(singleProduct);
});

router.put(`/:id`, async (req, res) => {
    const { name, price, description, category } = req.body;
    const updatedProduct = await Product.findOneAndReplace({ _id: req.params.id }, { name, price, description, category });
    res.json(updatedProduct);
});

module.exports = router;