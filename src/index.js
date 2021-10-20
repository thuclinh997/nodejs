const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const sass = require('node-sass');
const path = require('path');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'));
app.engine('hbs', hbs({extname: '.hbs'}));

app.set('views', path.join(__dirname, 'resources/views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home');

});

app.get('/news' , (req , res)=>{

    res.render('news');
});

app.listen(port, () => console.log('> Server is up and running on port : ' + port));