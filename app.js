const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const hbs = require('hbs');
const path = require("path");
// const requests = require('requests');

const staticPath = path.join(__dirname,"public");
const partialsPath = path.join(__dirname,"templates");

app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);

app.set("view engine", "hbs");

// Routing
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/weather", (req, res) => {
    res.render("weather");
})
app.get("*", (req, res) => {
    res.render("error404", {
        errorMsg: 'Oops! Page not found'
    })
})

app.listen(port, () => {
    console.log(`listening on localhost:${port}`);
})