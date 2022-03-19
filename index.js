const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('LandingPage.ejs');
})

app.get('/navigationTest', (req,res) => {
    res.render('navigationTest.ejs');
})
app.get('/navigationPage', (req,res) => {
    res.render('navigationPage.ejs');
})


app.listen(3000, () => {
    console.log('Alive and running on localhost: 3000');
})