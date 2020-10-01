var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

/* GET users listing. */
// correspond a la route http://localhost:3000/users/
router.get('/', function(req, res, next) {
    bdd.query("SELECT * from User", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.post('/add', function(req, res, next) {
    bdd.query("INSERT INTO User (user_id,user_name, user_surname, user_adress, user_posta_code, user_city, user_country, user_graduation, user_pwssd, user_email, user_description, role, user_birth) VALUES(2, '" + req.body.name + "', 'test', '8 contours du chatelet', 35310, 'Bréal sous Monfort', 'France', 'DUT info', 'test', 'test.test@epitech.eu', 'Description de moi', 'Utilisateur', DATE '1999-08-18');", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

module.exports = router;
