const router = require(`express`).Router();
const { signUpUser, loginUser } = require(`../Controllers/userController.js`);
// Write your routes below

router.post(`/signup`, signUpUser);

router.post(`/login`, loginUser);

// router.get(`/verifyjwt`, (req, res) => {
//     if (req?.headers?.authorization) {
//         const token = req.headers.authorization.split(" ")[1];
//         const decodedData = jwt.verify(token, "Godzilla");
//         console.log(decodedData._doc);
//     }
//     res.end();
// });

// router.get(`/president`, checkIfPresident, (req, res) => {
//     res.send(`<h1>Welcome to president cabin!!!</h1>`);
// });

module.exports = router;