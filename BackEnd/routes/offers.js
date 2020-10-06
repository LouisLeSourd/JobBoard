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
// correspond a la route http://localhost:3000/offers/filters
router.post('/filters', function(req, res, next) {
    let request = "SELECT offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date, cpn_logo from Offer WHERE ";
    request = addCondition(req.body.offerFilter.offer_city, 'offer_city', request);
    request = addCondition(req.body.offerFilter.offer_title, 'offer_title', request);
    request = addCondition(req.body.offerFilter.offer_sector, 'offer_sector', request);
    request = addCondition(req.body.offerFilter.offer_country, 'offer_country', request);
    request = addCondition(req.body.offerFilter.offer_language, 'offer_language', request);
    request = addCondition(req.body.offerFilter.offer_function, 'offer_function', request);
    request = addCondition(req.body.offerFilter.offer_required_exp, 'offer_required_exp', request);
    request = addCondition(req.body.offerFilter.offer_contract_type, 'offer_contract_type', request);
    request = addCondition(req.body.offerFilter.offer_contract_duration, 'offer_contract_duration', request);
    request = addCondition(req.body.offerFilter.offer_beginning_contract, 'offer_beginning_contract', request);
    request += ";";
    bdd.query(request, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

function addCondition(conditionObject, conditionString, request) {
    if (conditionObject) {
        if (request !== "SELECT offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date, cpn_logo from Offer WHERE ") {
            if (conditionString !== 'offer_title')
                request += "" + conditionString + "='" + conditionObject + "'";
            else
                request += "" + conditionString + "like '%" + conditionObject + "%'";
        }
    }
}

module.exports = router;