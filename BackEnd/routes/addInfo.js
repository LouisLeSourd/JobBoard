var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

// DELETE REQUESTS
// correspond a la route http://localhost:3000/addInfo
router.post('/', function(req, res, next) {
    bdd.query("INSERT INTO Informations VALUES('" + req.body.newInfo.text_email + "', " + req.body.newInfo.cpn_id + ", '" + req.body.newInfo.cpn_email + "', " + req.body.newInfo.user_id + ", '" + req.body.newInfo.user_email + "', " + req.body.newInfo.offer_id + ");", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

module.exports = router;
