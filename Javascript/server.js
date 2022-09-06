const express = require( 'express');
const path = require('path');
const app = express();

const publicDirectory = path.join(__dirname, './public');
console.log(__dirname);
console.log(publicDirectory);
app.use(express.static(publicDirectory));
app.set('view engine', 'hbs');

app.get("/",(req, res)=> {
    res.render('index');
})
app.get('/index.hbs',(req, res)=> {
    res.render('index');
})
app.get('/about.hbs',(req, res)=> {
    res.render('about');
})
app.get('/store.hbs', (req, res)=> {
    res.render('store');
})
app.get('/bunny-hat.hbs',(req, res)=> {
    res.render('bunny-hat');
})
app.get('/hood.hbs',(req, res)=> {
    res.render('hood');
})
app.get('/stuffie.hbs',(req, res)=> {
    res.render('stuffie');
})
app.get('/two-tone.hbs',(req, res)=> {
    res.render('two-tone');
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})








