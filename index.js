const path = require("path");
const hbs = require("hbs");
const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

//Define path for Express config
const publicDirectoryPath = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);


//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.render('index')
})



app.get('/id', (req, res) => {
    res.render('id&password')
})


app.get('/id/hotvip', (req, res) => {
    res.render('viphot')
})

app.get('/amprime', (req, res) => {
    res.render('prime')
}),



    app.listen(port, () => {
        console.log('server is running ' + port)
    })
