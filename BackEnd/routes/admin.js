var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

// DELETE REQUESTS
// correspond a la route http://localhost:3000/admin/deleteCompany/id=id
router.get('/deleteCompany/id=:id', function(req, res, next) {
    var id = req.params.id;
    bdd.query("DELETE FROM Company WHERE cpn_id=" + id + ";", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// correspond a la route http://localhost:3000/admin/deleteUser/id=id
router.get('/deleteUser/id=:id', function(req, res, next) {
    var id = req.params.id;
    bdd.query("DELETE FROM User WHERE user_id=" + id + ";", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// correspond a la route http://localhost:3000/admin/deleteOffer/id=id
router.get('/deleteOffer/id=:id', function(req, res, next) {
    var id = req.params.id;
    bdd.query("DELETE FROM Offer WHERE offer_id=" + id + ";", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

//ADD REQUESTS
// correspond a la route http://localhost:3000/admin/addCompany
router.post('/addCompany', function(req, res, next) {
    bdd.query("INSERT INTO Company (cpn_field, cpn_name, cpn_size, cpn_representative, cpn_head_office, cpn_employees_number, cpn_turnover, cpn_email, cpn_description) VALUES ('" + req.body.newCompany.cpn_field + "', '" + req.body.newCompany.cpn_name + "', '" + req.body.newCompany.cpn_size + "', '" + req.body.newCompany.cpn_representative + "', '" + req.body.newCompany.cpn_head_office + "', '" + req.body.newCompany.cpn_employees_number + "', '" + req.body.newCompany.cpn_turnover + "', '" + req.body.newCompany.cpn_email + "', '" + req.body.newCompany.cpn_description + "');", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// correspond a la route http://localhost:3000/admin/addUser
router.post('/addUser', function(req, res, next) {
    bdd.query("INSERT INTO User (user_name, user_surname, user_password, user_email) VALUES ('" + req.body.newUser.user_name + "', '" + req.body.newUser.user_surname + "', '" + req.body.newUser.user_password + "', '" + req.body.newUser.user_email + "');", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/admin/addOffer
router.post('/addOffer', function(req, res, next) {
    bdd.query("INSERT INTO Offer (offer_title, offer_city, offer_country, offer_sector, offer_function, offer_contract_type, offer_required_exp, offer_language, offer_contract_duration, offer_description,cpn_id, cpn_field, cpn_name, cpn_size) VALUES('" + req.body.newOffer.offer_title + "', '" + req.body.newOffer.offer_city + "', '" + req.body.newOffer.offer_country + "', '" + req.body.newOffer.offer_sector + "', '" + req.body.newOffer.offer_function + "', '" + req.body.newOffer.offer_contract_type + "', '" + req.body.newOffer.offer_required_exp + "', '" + req.body.newOffer.offer_language + "', '" + req.body.newOffer.offer_contract_duration + "', '" + req.body.newOffer.offer_description + "', '" + req.body.newOffer.cpn_id + "', '" + req.body.newOffer.cpn_field + "', '" + req.body.newOffer.cpn_name + "', '" + req.body.newOffer.cpn_size + "');", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// correspond a la route http://localhost:3000/admin/info/users
router.get('/info/users', function(req, res, next) {
    bdd.query("SELECT * FROM User;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// correspond a la route http://localhost:3000/admin/info/companies
router.get('/info/companies', function(req, res, next) {
    bdd.query("SELECT * FROM Company;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// correspond a la route http://localhost:3000/admin/info/offers
router.get('/info/offers', function(req, res, next) {
    bdd.query("SELECT * FROM Offer;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// correspond a la route http://localhost:3000/admin/info/apply
router.get('/info/apply', function(req, res, next) {
    bdd.query("SELECT * FROM Informations;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
module.exports = router;