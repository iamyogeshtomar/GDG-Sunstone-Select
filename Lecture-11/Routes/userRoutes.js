const router = require(`express`).Router();
const User = require(`../Models/user.js`);
const bcryptjs = require(`bcryptjs`);

// Write your routes below

router.post(`/signup`, async (req, res) => {
    const { username, name, email, mobile, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({ username, name, email, mobile, password: hashedPassword });
    res.json(newUser);
});

router.post(`/login`, (req, res) => { });

module.exports = router;