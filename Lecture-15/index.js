const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const cookieParser = require(`cookie-parser`);
const session = require(`express-session`);
const { MongoStore } = require(`connect-mongo`);
const PORT = 3000;

// IIFE - Immediately Invoking Function Expression
(async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);
        console.log(`Database connected successfully!!!`);
    } catch (error) {
        console.log(error);
    }
})();

app.use(session({
    secret: "February",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: `mongodb://127.0.0.1:27017/${process.env.DB_NAME}` })
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const productRoutes = require(`./Routes/productRoutes.js`);
const userRoutes = require(`./Routes/userRoutes.js`);

app.use(`/products`, productRoutes);
app.use(`/user`, userRoutes);

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/checkUser`, (req, res) => {
    console.log(req.user);
    res.end();
});

app.get(`/cookies/:name/:yob/:city`, (req, res) => {
    const { name, yob, city } = req.params;
    res.cookie(`name`, name);
    res.cookie(`yob`, yob);
    res.cookie(`city`, city);
    res.cookie(`isPaymentDone`, false);
    res.send(`<h1>Cookies recieved</h1>`);
});

app.get(`/verifyCookie`, (req, res) => {
    // console.log(req.cookies);
    const { name, yob, city } = req.cookies;
    if (!name || !yob || !city) {
        res.send(`<h1>Sign in first!!!</h1>`);
    }
    res.send(`<h1>Welcome back!!!</h1>`);
});

app.get(`/session/:name/:year/:genre`, (req, res) => {
    req.session.name = req.params.name;
    req.session.year = req.params.year;
    req.session.genre = req.params.genre;
    res.send(`<h1>Information recieved!!!</h1>`);
});

app.get(`/verifySession`, (req, res) => {
    console.log(req.session);
    if (req.session.name === "Scent of a Woman" && req.session.year === "1992" && req.session.genre === "Drama") {
        res.send(`<h1>Correct Information!!!</h1>`);
    }
    res.send(`<H1>Wrong Information!!!</H1>`);
});

app.get(`/destroySession`, (req, res) => {
    req.session.destroy();
    res.send(`<h1>Session Destroyed!!!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is working on http://127.0.0.1:${PORT}`);
});

// const arr = [1, 2, 3, 4, 5];

// // const item1 = arr[0];
// // const item2 = arr[1];
// // const item3 = arr[2];
// // const item4 = arr[3];
// // const item5 = arr[4];

// const [item0, item1, item2, item3, item4] = arr;