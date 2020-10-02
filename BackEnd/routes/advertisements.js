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

router.post('/filters', function(req, res, next) {
    let request = "SELECT * from Advertisement WHERE ";
    request = addCondition(req.body.offerFilter.adv_city, 'adv_city', request);
    request = addCondition(req.body.offerFilter.adv_title, 'adv_title', request);
    request = addCondition(req.body.offerFilter.adv_sector, 'adv_sector', request);
    request = addCondition(req.body.offerFilter.adv_country, 'adv_country', request);
    request = addCondition(req.body.offerFilter.adv_language, 'adv_language', request);
    request = addCondition(req.body.offerFilter.adv_function, 'adv_function', request);
    request = addCondition(req.body.offerFilter.adv_required_exp, 'adv_required_exp', request);
    request = addCondition(req.body.offerFilter.adv_contract_type, 'adv_contract_type', request);
    request = addCondition(req.body.offerFilter.adv_contract_duration, 'adv_contract_duration', request);
    request = addCondition(req.body.offerFilter.adv_beginning_contract, 'adv_beginning_contract', request);
    request += ";";
    bdd.query(request, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

function addCondition(conditionObject, conditionString, request) {
    if (conditionObject) {
        if (request !== "SELECT * from Advertisement WHERE ") {
            request += " and ";
        }
        request += "" + conditionString + "='" + conditionObject + "'";
    }
    return request;
}

module.exports = router;
