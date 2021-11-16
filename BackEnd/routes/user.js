var express = require('express');
var router = express.Router();
var bdd = require('./module/bdd')

// correspond a la route http://localhost:3000/user/
router.get('/', function(req, res, next) {
    var id = req.params.id;
    bdd.query("SELECT * from User;", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/user/mail=mail
router.get('/mail=:mail', function(req, res, next) {
    var mail = req.params.mail;
    bdd.query("SELECT * from User WHERE user_email='" + mail + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/user/id=id
router.get('/id=:id', function(req, res, next) {
    var id = req.params.id;
    bdd.query("SELECT * from User WHERE user_id='" + id + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/user/updateProfile
router.put('/updateProfile', function(req, res, next) {
    let request = "UPDATE User SET ";
    request = addUpdateCondition(req.body.updateUserProfile.user_city, 'user_city', request);
    request = addUpdateCondition(req.body.updateUserProfile.user_birth, 'user_birth', request);
    request = addUpdateCondition(req.body.updateUserProfile.user_adress, 'user_adress', request);
    request = addUpdateCondition(req.body.updateUserProfile.user_country, 'user_country', request);
    request = addUpdateCondition(req.body.updateUserProfile.user_posta_code, 'user_posta_code', request);
    request = addUpdateCondition(req.body.updateUserProfile.user_graduation, 'user_graduation', request);
    request += " WHERE user_id = '" + req.body.userId + "';";
    bdd.query(request, (err, result, fields) => {
        console.log('request', request);
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});
// correspond a la route http://localhost:3000/user/updateDescrip
router.post('/updateDescrip', function(req, res, next) {
    bdd.query("UPDATE User SET user_description ='" + req.body.description + "' WHERE user_id = '" + req.body.userId + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/user/updateCV
router.post('/updateCV', function(req, res, next) {
    bdd.query("UPDATE User SET user_cv ='" + req.body.cv + "' WHERE user_id = '" + req.body.userId + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/user/updateEmail&Password
router.post('/updatePassword', function(req, res, next) {
    bdd.query("UPDATE User SET user_password = '" + req.body.newPwd + "' WHERE user_id = '" + req.body.userId + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
// correspond a la route http://localhost:3000/user/delete/id=id
// remove an user from DB
router.get('/delete/id=:id', function(req, res, next) {
    var id = req.params.id;
    bdd.query("DELETE FROM User WHERE user_id='" + id + "';", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});

// correspond a la route http://localhost:3000/user/add
// add a new user. sign in
router.post('/add', function(req, res, next) {
    bdd.query("INSERT INTO User (user_name, user_surname, user_password, user_email) VALUES('" + req.body.newUser.user_name + "', '" + req.body.newUser.user_surname + "', '" + req.body.newUser.user_password + "', '" + req.body.newUser.user_email + "');", (err, result, fields) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
});
module.exports = router;

function addUpdateCondition(conditionObject, conditionString, request) {
    if (request !== "UPDATE User SET ") {
        request += ", ";
    }
    if (conditionObject) {
        request += "" + conditionString + "='" + conditionObject + "'";
    } else {
        request += "" + conditionString + "=" + null + "";
    }
    return request;
}
