var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

// DELETE REQUESTS
// correspond a la route http://localhost:3000/addInfo
router.post('/', function(req, res, next) {
    if (err) throw err;
    console.log(result);
    bdd.query("INSERT INTO Informations VALUES('" + req.body.objetc.text_email + "', " + req.body.object.cpn_id + ", '" + req.body.object.cpn_email + "', " + req.body.object.user_id + ", '" + req.body.object.user_email + "', " + req.body.object.offer_id + ");", (err, result, fields) => {
        res.send(result);
    })
});

module.exports = router;