var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

/* GET users listing. */
// correspond a la route http://localhost:3000/users/
router.get('/', function(req, res, next) {
    bdd.query("SELECT * from User ;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

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
    bdd.query("UPDATE User SET user_description ='" + req.body.description + "' WHERE user_id = " + req.body.id + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.post('/updateCV', function(req, res, next) {
    bdd.query("UPDATE User SET user_cv ='" + req.body.cv + "' WHERE user_id = " + req.body.id + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

router.post('/updateEmail&password', function(req, res, next) {
    bdd.query("UPDATE User SET user_email ='" + req.body.email + "', user_password = '" + req.body.password + "' WHERE user_id = " + req.body.id + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// remove an user from DB
router.get('/delete/id=:id', function(req, res, next) {
    var id = req.params.id;
    bdd.query("DELETE FROM User WHERE user_id='" + id + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// add a new user. sign in
router.post('/add', function(req, res, next) {
    bdd.query("INSERT INTO User (user_name, user_surname, user_pwssd, user_email) VALUES('" + req.body.name + "', " + req.body.surname + "'test', '8 contours du chatelet', 35310, 'Bréal sous Monfort', 'France', 'DUT info', 'test', 'test.test@epitech.eu', 'Description de moi', 'Utilisateur', DATE '1999-08-18');", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
module.exports = router;