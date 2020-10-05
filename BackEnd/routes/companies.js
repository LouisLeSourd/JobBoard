var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

/* GET users listing. */
// correspond a la route http://localhost:3000/companies/
router.get('/', function(req, res, next) {
    bdd.query("select cpn_name, cpn_size, cpn_employees_number, cpn_field from Company", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// correspond a la route http://localhost:3000/companies/size
router.get('/size=:size', function(req, res, next) {
    var size = req.params.size;
    bdd.query("select cpn_name, cpn_size, cpn_employees_number, cpn_field from Company WHERE cpn_size = '" + size + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/companies/field=le field
router.get('/field=:field', function(req, res, next) {
    var field = req.params.field;
    bdd.query("select cpn_name, cpn_size, cpn_employees_number, cpn_field from Company WHERE cpn_field = '" + field + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/companies/size=size/field=field
router.get('/field=:field/size=:size', function(req, res, next) {
    var field = req.params.field;
    var size = req.params.size;
    bdd.query("select cpn_name, cpn_size, cpn_employees_number, cpn_field from Company WHERE cpn_size = '" + size + "'and cpn_field='" + field + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});


module.exports = router;