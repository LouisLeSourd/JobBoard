var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companiesRouter = require('./routes/companies');
var companyRouter = require('./routes/company');
var advertisementsRouter = require('./routes/advertisements');

var app = express();

// Permet l'utilisation de notre API dans un contexte local.
app.options('*', cors());
app.use(cors())


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// http://localhost:3000/
app.use('/users', usersRouter);
// http://localhost:3000/users/
app.use('/advertisements', advertisementsRouter);
// http://localhost:3000/users/
app.use('/companies', companiesRouter);
// http://localhost:3000/companies/
app.use('/company', companyRouter);
// http://localhost:3000/company/

module.exports = app;