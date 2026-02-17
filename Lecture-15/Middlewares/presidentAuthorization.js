const jwt = require(`jsonwebtoken`);

const checkIfPresident = (req, res, next) => {
    if (req?.headers?.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const decodedData = jwt.verify(token, "Godzilla");
        if (decodedData._doc.role === "President") {
            // Execute
            next();
        }
        else {
            // reject
            res.send(`<h1>You are not authorized!!!</h1>`);
        }
    }
};

module.exports = { checkIfPresident };