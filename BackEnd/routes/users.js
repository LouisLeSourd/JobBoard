var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

/* GET users listing. */
// correspond a la route http://localhost:3000/users/
router.get('/mail=:mail', function(req, res, next) {
    var mail = req.params.mail;
    bdd.query("SELECT * from User WHERE user_email='" + mail + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.post('/updateProfil', function(req, res, next) {
    bdd.query("UPDATE User SET user_adress + '" + req.body.adress + "', user_posta_code = '" + req.body.postal + "', user_city = '" + req.body.city + "', user_country = '" + req.body.country + "', user_graduation = '" + req.body.graduation + "', user_birth = '" + req.body.birth + "' WHERE email_user = '" + req.body.email + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.post('/updateDescrip', function(req, res, next) {
    bdd.query("INSERT INTO User (user_description) VALUES('" + req.body.name + "', 'test', '8 contours du chatelet', 35310, 'Bréal sous Monfort', 'France', 'DUT info', 'test', 'test.test@epitech.eu', 'Description de moi', 'Utilisateur', DATE '1999-08-18');", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.post('/updateresume', function(req, res, next) {
    bdd.query("INSERT INTO User (user_cv) VALUES('" + req.body.name + "', 'test', '8 contours du chatelet', 35310, 'Bréal sous Monfort', 'France', 'DUT info', 'test', 'test.test@epitech.eu', 'Description de moi', 'Utilisateur', DATE '1999-08-18');", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.post('/updateEmail&psswd', function(req, res, next) {
    bdd.query("INSERT INTO User (user_adress, user_posta_code, user_city, user_country, user_graduation, user_birth) VALUES('" + req.body.name + "', 'test', '8 contours du chatelet', 35310, 'Bréal sous Monfort', 'France', 'DUT info', 'test', 'test.test@epitech.eu', 'Description de moi', 'Utilisateur', DATE '1999-08-18');", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.post('/delete', function(req, res, next) {
    bdd.query("INSERT INTO User (user_adress, user_posta_code, user_city, user_country, user_graduation, user_birth) VALUES('" + req.body.name + "', 'test', '8 contours du chatelet', 35310, 'Bréal sous Monfort', 'France', 'DUT info', 'test', 'test.test@epitech.eu', 'Description de moi', 'Utilisateur', DATE '1999-08-18');", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.post('/add', function(req, res, next) {
bdd.query("INSERT INTO User (user_name, user_surname, user_pwssd, user_email) VALUES('" + req.body.name + "', " + req.body.surname + 'test', '8 contours du chatelet', 35310, 'Bréal sous Monfort', 'France', 'DUT info', 'test', 'test.test@epitech.eu', 'Description de moi', 'Utilisateur', DATE '1999-08-18');
", (err, result, fields) => {
if (err) throw err;
console.log(result);
res.send(result);
})
});
module.exports = router;