var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

/* GET users listing. */
// correspond a la route http://localhost:3000/advertisements/
router.get('/', function(req, res, next) {
    bdd.query("SELECT * from Advertisement", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.post('/toto', function(req, res, next) {

    console.log('body.offer.city', req.body.offerFilter.adv_city);
    console.log('body', req.body);

    let request = "SELECT * from Advertisement WHERE ";

    if (req.body.offerFilter.adv_title) {
        request = addAnd(request);
        request += "adv_title='" + req.body.offerFilter.adv_title + "'";
    }
    if (req.body.offerFilter.adv_city) {
        request = addAnd(request);
        request += "adv_city='" + req.body.offerFilter.adv_city + "'";
    }
    if (req.body.offerFilter.adv_beginning_contract) {
        request = addAnd(request);
        request += "adv_beginning_contract='" + req.body.offerFilter.adv_beginning_contract + "'";
    }
    if (req.body.offerFilter.adv_contract_type) {
        request = addAnd(request);
        request += "adv_contract_type='" + req.body.offerFilter.adv_contract_type + "'";
    }
    if (req.body.offerFilter.adv_contract_duration) {
        request = addAnd(request);
        request += "adv_contract_duration='" + req.body.offerFilter.adv_contract_duration + "'";
    }
    if (req.body.offerFilter.adv_country) {
        request = addAnd(request);
        request += "adv_country='" + req.body.offerFilter.adv_country + "'";
    }
    if (req.body.offerFilter.adv_function) {
        request = addAnd(request);
        request += "adv_function='" + req.body.offerFilter.adv_function + "'";
    }
    if (req.body.offerFilter.adv_language) {
        request = addAnd(request);
        request += "adv_language='" + req.body.offerFilter.adv_language + "'";
    }
    if (req.body.offerFilter.adv_required_exp) {
        request = addAnd(request);
        request += "adv_required_exp='" + req.body.offerFilter.adv_required_exp + "'";
    }
    if (req.body.offerFilter.adv_sector) {
        request = addAnd(request);
        request += "adv_sector='" + req.body.offerFilter.adv_sector + "'";
    }
    request += ";";

    console.log('requete', request);

    bdd.query(request, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

function addAnd(request) {
    if (request !== "SELECT * from Advertisement WHERE ") {
        console.log('if', request);
        request += " and ";
    }
    return request;
}


module.exports = router;
