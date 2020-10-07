var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

/* GET users listing. */
// correspond a la route http://localhost:3000/offers/
router.get('/', function(req, res, next) {
    bdd.query("SELECT offer_title, cpn_name, offer_contract_type, offer_function, offer_city, offer_country, offer_contract_duration, cpn_field, cpn_size, cpn_logo from Offer", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/oofers/contracts
router.get('/contracts', function(req, res, next) {
    bdd.query("select distinct offer_contract_type from Offer;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/offers/functions
router.get('/functions', function(req, res, next) {
    bdd.query("select distinct offer_function from Offer;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/offers/fields
router.get('/fields', function(req, res, next) {
    bdd.query("select distinct cpn_field from Offer;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/offers/sizes
router.get('/sizes', function(req, res, next) {
    bdd.query("select distinct cpn_size from Offer;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/offers/durations
router.get('/durations', function(req, res, next) {
    bdd.query("select distinct offer_contract_duration from Offer;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/offers/beginnings
router.get('/beginnings', function(req, res, next) {
    bdd.query("select distinct offer_beginning_contract from Offer;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/offers/experiences
router.get('/experiences', function(req, res, next) {
    bdd.query("select distinct offer_required_exp from Offer;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/offers/languages
router.get('/languages', function(req, res, next) {
    bdd.query("select distinct offer_language from Offer;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/offers/offersFilters
router.post('/offersFilters', function(req, res, next) {
    let request = "SELECT offer_title, cpn_name, offer_contract_type, offer_function, offer_city, offer_country, offer_contract_duration, cpn_field, cpn_size, cpn_logo from Offer WHERE ";
    request = addCondition(req.body.offersFilters.cpn_size, 'cpn_size', request);
    request = addCondition(req.body.offersFilters.cpn_field, 'cpn_field', request);
    request = addCondition(req.body.offersFilters.offer_title, 'offer_title', request);
    request = addCondition(req.body.offersFilters.offer_function, 'offer_function', request);
    request = addCondition(req.body.offersFilters.offer_required_exp, 'offer_required_exp', request);
    request = addCondition(req.body.offersFilters.offer_contract_type, 'offer_contract_type', request);
    request = addCondition(req.body.offersFilters.offer_contract_duration, 'offer_contract_duration', request);
    request += ";";
    bdd.query(request, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

function addCondition(conditionObject, conditionString, request) {
    if (conditionObject) {
        if (request !== "SELECT offer_title, cpn_name, offer_contract_type, offer_function, offer_city, offer_country, offer_contract_duration, cpn_field, cpn_size, cpn_logo from Offer WHERE ") {
            request += " and ";
        }
        if (conditionString !== 'offer_title') {
            request += "" + conditionString + "='" + conditionObject + "'";
        } else {
            request += "" + conditionString + " like '%" + conditionObject + "%'";
        }
    }
    return request;
}

module.exports = router;
