var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

/* GET users listing. */
// correspond a la route http://localhost:3000/offer/name=name/id=id
router.get('/name=:name/id=:id', function(req, res, next) {
    var name = req.params.name;
    var id = req.params.id;
    bdd.query("select offer_title, offer_id, offer_city, offer_country, offer_sector, offer_function, offer_publication_date, offer_contract_type, offer_beginning_contract, offer_required_exp, offer_language, offer_contract_duration, offer_description, Company.cpn_field, Offer.cpn_name, Offer.cpn_size, Company.cpn_logo, cpn_description, cpn_email , Company.cpn_id from Offer JOIN Company where Company.cpn_name='" + name + "' and Offer.cpn_name='" + name + "' and Offer.offer_id=" + id + ";", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

module.exports = router;