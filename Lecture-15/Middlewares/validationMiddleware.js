
const Joi = require(`joi`);


const userValidator = (req, res, next) => {
    const { username, name, mobile, email, role, password } = req.body;
    const userSignUpSchema = Joi.object({
        username: Joi.string().min(2).max(40).required(),
        name: Joi.string().min(2).max(40).required(),
        mobile: Joi.number().min(1000000000).max(9999999999).required(),
        email: Joi.string().email(),
        role: Joi.string().valid(`Intern`, `Associate`, `Manager`, `Architect`, `President`, `Shareholders`, `Customer`, `Merchant`),
        password: Joi.string().min(8).required(),
    });
    const { error, value } = userSignUpSchema.validate({ username, name, mobile, email, role, password });
    // console.log(error);
    if (error) {
        return res.send(`<h1>Validation error</h1>`);
    }
    next();
};


module.exports = { userValidator };