var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

/* GET users listing. */
// correspond a la route http://localhost:3000/companies/
router.get('/', function(req, res, next) {
    bdd.query("select cpn_name, cpn_size, cpn_employees_number, cpn_field, cpn_logo from Company", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/companies/fields
router.get('/fields', function(req, res, next) {
    bdd.query("select distinct cpn_field from Company;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/companies/fields
router.get('/sizes', function(req, res, next) {
    bdd.query("select distinct cpn_size from Company;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/companies/size=size/field=field
router.post('/companiesFilters', function(req, res, next) {
    let request = "select cpn_name, cpn_size, cpn_employees_number, cpn_field, cpn_logo from Company WHERE ";
    request = addCondition(req.body.companiesFilters.cpn_field, 'cpn_field', request);
    request = addCondition(req.body.companiesFilters.cpn_size, 'cpn_size', request);
    request = addCondition(req.body.companiesFilters.cpn_name, 'cpn_name', request);
    request += ";";
    bdd.query(request, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

function addCondition(conditionObject, conditionString, request) {
    if (conditionObject) {
        if (request !== "select cpn_name, cpn_size, cpn_employees_number, cpn_field, cpn_logo from Company WHERE ") {
            request += " and ";
        }
        if (conditionString !== 'cpn_name') {
            request += "" + conditionString + "='" + conditionObject + "'";
        } else {
            request += "" + conditionString + " like '%" + conditionObject + "%'";
        }
    }
    return request;
}

module.exports = router;
