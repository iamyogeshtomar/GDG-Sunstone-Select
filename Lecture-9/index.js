const express = require(`express`);
const app = express();
const path = require(`path`);
const PORT = 3000;

// app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine</h1>`);
});

app.get(`/htmlFile`, (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.post(`/htmlFile`, (req, res) => {
    console.log(req.body);
    res.end();
});

app.get(`/q`, (req, res) => {
    console.log(req.query);
    res.send(`<h1>My name is ${req.query.name} and I'm from ${req.query.city}</h1>`);
});

app.get(`/path/:carName/:build/:color`, (req, res) => {
    console.log(req.params);
    res.send(`<h1>I have a ${req.params.carName} of ${req.params.build} of ${req.params.color}</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is working fine!!!!`);
});