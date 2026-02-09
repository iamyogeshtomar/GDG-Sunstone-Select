const router = require(`express`).Router();
const User = require(`../Models/user.js`);
const bcryptjs = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);

// Write your routes below

router.post(`/signup`, async (req, res) => {
    const { username, name, email, mobile, role, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({ username, name, email, mobile, role, password: hashedPassword });
    res.json(newUser);
});

router.post(`/login`, async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.send(`<h1>Register yourself First!!!!</h1>`);
    }
    console.log(user);
    const checkPassword = await bcryptjs.compare(password, user.password);

    if (checkPassword) {
        const token = jwt.sign({ ...user }, `batman`, { expiresIn: "7d" });
        res.setHeader(`Authorization`, token);
        res.send(`<H1>Sign in successful!!!!</H1>`);
    }
    else {
        res.send(`<h1>Incorrect Password!!!</h1>`);
    }
});

router.get(`/verifyjwt`, (req, res) => {
    if (req?.headers?.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        res.end();
    }
});

module.exports = router;