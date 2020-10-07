var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors")

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var companiesRouter = require('./routes/companies');
var companyRouter = require('./routes/company');
var offersRouter = require('./routes/offers');
var offerRouter = require('./routes/offer');
var adminRouter = require('./routes/admin');
var addInfoRouter = require('./routes/addInfo');

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
app.use('/user', userRouter);
// http://localhost:3000/user/
app.use('/offers', offersRouter);
// http://localhost:3000/offers/
app.use('/offer', offerRouter);
// http://localhost:3000/offer/
app.use('/companies', companiesRouter);
// http://localhost:3000/companies/
app.use('/company', companyRouter);
// http://localhost:3000/company/
app.use('/admin', adminRouter);
// http://localhost:3000/admin/
app.use('/addInfo', addInfoRouter);
// http://localhost:3000/addInfo/

module.exports = app;