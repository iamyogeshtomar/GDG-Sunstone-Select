const router = require(`express`).Router();
const { checkIfMerchant, checkCorrectOwner } = require(`../Middlewares/merchantAuthorization.js`);
const { getAllProducts, addNewProduct, editProduct, deleteProduct, getSingleProduct } = require(`../Controllers/productController.js`);
const { authUser } = require(`../Middlewares/authMiddleware.js`);


router.get(`/`, getAllProducts);

router.post(`/`, authUser, checkIfMerchant, addNewProduct);

router.get(`/:id`, getSingleProduct);

router.put(`/:id`, authUser, checkIfMerchant, editProduct);

router.delete(`/:id`, authUser, checkIfMerchant, checkCorrectOwner, deleteProduct);

module.exports = router;