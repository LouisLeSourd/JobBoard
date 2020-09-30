var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

/* GET users listing. */
// correspond a la route http://localhost:3000/users/
router.get('/', function(req, res, next) {
    bdd.query("SELECT * from Advertisement", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});


module.exports = router;