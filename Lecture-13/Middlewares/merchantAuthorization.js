const jwt = require(`jsonwebtoken`);

const checkIfMerchant = (req, res, next) => {
    if (req?.headers?.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const decodedData = jwt.verify(token, "Godzilla");
        console.log(decodedData);
        if (decodedData.role === "Merchant") {
            // Execute
            req.user = decodedData;
            next();
        }
        else {
            // reject
            res.send(`<h1>You are not authorized!!!</h1>`);
        }
    }
};

module.exports = { checkIfMerchant };