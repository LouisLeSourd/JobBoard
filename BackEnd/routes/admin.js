var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

// correspond a la route http://localhost:3000/admin/deleteCompany/id=id
router.get('/deleteCompany/id=:id', function(req, res, next) {
    var id = req.params.id;
    if (err) throw err;
    bdd.query("DELETE FROM Company WHERE cpn_id=" + id + ";", (err, result, fields) => {
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


module.exports = router;