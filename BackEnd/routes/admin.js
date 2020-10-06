var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

/* GET users listing. */
// correspond a la route http://localhost:3000/offer/id=id
router.get('/deleteCompany/id=:id', function(req, res, next) {
    var id = req.params.id;
    bdd.query("DELETE FROM Informations WHERE cpn_id = " + id + ";", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
    bdd.query("DELETE FROM Offer WHERE cpn_id=" + id + ";", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
    bdd.query("DELETE FROM Company WHERE cpn_id = " + id + ";", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })

});

router.get('/deleteUser/id=:id', function(req, res, next) {
    var id = req.params.id;
    bdd.query("DELETE FROM User WHERE user_id=" + id + ";", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// correspond a la route http://localhost:3000/offer/delete/id=id
router.get('/deleteOffer/id=:id', function(req, res, next) {
    var id = req.params.id;
    bdd.query("DELETE FROM Offer WHERE offer_id=" + id + ";", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});


module.exports = router;