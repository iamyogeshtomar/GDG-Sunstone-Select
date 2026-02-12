
const jwt = require(`jsonwebtoken`);

const authUser = async (req, res, next) => {
    if (req?.headers?.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const decodedUser = jwt.verify(token, "Godzilla");
        if (!decodedUser) {
            return res.send(`<h1>Invalid Token!!!!</h1>`);
        }
        req.user = decodedUser;
        next();
    }
    else {
        return res.send(`<h1>Please sign in!!!!</h1>`);
    }
};

module.exports = { authUser };