const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const PORT = 3000;

// IIFE - Immediately Invoking Function Expression
(async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/sumsang`);
        console.log(`Database connected successfully!!!`);
    } catch (error) {
        console.log(error);
    }
})();

app.use(express.urlencoded({ extended: true }));

// Routes
const productRoutes = require(`./Routes/productRoutes.js`);

app.use(productRoutes);


app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/products`, (req, res) => { });

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