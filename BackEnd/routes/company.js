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

module.exports = router;