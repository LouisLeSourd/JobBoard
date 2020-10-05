var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

/* GET users listing. */

// correspond a la route http://localhost:3000/company/id=cpn_id
router.get('/id=:id', function(req, res, next) {
    var id = req.params.id;
    bdd.query("select * from Company WHERE cpn_id=" + id + ";", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// correspond a la route http://localhost:3000/company/id=cpn_id/offers
router.get('/id=:id/offers', function(req, res, next) {
    var id = req.params.id;
    bdd.query("select offer_title, cpn_name, offer_contract_type, offer_city, offer_country, offer_publication_date, cpn_logo from Offer WHERE cpn_id=" + id + ";", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

module.exports = router;