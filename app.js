const express = require('express');
const path = require('path');

const app = express();

const user = require('./routes/user');

app.set('view engine','ejs');
app.set('views','views');

const bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({extended:true}));

app.use(user.routes);

app.listen(5000);