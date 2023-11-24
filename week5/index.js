const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: './info.env'});

const app = express();

const db = mysql.createConnection({
    DATABASE_HOST: process.env.host,
    DATABASE_USER: process.env.user,
    DATABASE_PASSWORD: process.env.password,
    DATABASE: process.env.info   
});

const publicDirectory = path.join(__dirname, './public');

app.use(express.static(publicDirectory));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

db.connect( (error) => {
      if(error) {
        console.log(error)
      } else {
        console.log("MYSQL Connected")
      }
});

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(5001, () => {
    console.log("Server started on Port 5001");
});  
