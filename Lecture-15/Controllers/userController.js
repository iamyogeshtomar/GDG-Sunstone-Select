const User = require(`../Models/user.js`);
const bcryptjs = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);

const signUpUser = async (req, res) => {
    const { username, name, email, mobile, role, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({ username, name, email, mobile, role, password: hashedPassword });
    res.json(newUser);
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.send(`<h1>Register yourself First!!!!</h1>`);
    }
    // console.log(user);
    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword) {
        res.send(`<h1>Incorrect Credentials!!!!</h1>`);
    }
    const { _id, username, name, role } = user;
    // console.log(_id, username, name, role);
    // console.log(user);
    const token = jwt.sign({ _id, username, name, role }, "Godzilla", { expiresIn: "12d" });
    res.setHeader(`Authorization`, token);
    res.send(`<h1>Welcome Back!!!</h1>`);
};

module.exports = { signUpUser, loginUser };