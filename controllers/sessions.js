const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//************************ ROUTES ***************************//

//NEW
router.get('/new', (req, res) => {
    res.render('sessions/new.ejs');
});

//CREATE
router.post('/', (req, res)=>{
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if(req.body.password == foundUser.password){
            res.send('logged in');
        } else {
            res.send('wrong password');
        }
    });
});

//ADD USER TO SESSION ON LOGIN
router.post('/', (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser)=>{
        if(req.body.password == foundUser.password){
            req.session.currentUser = foundUser;
            res.redirect('/');
        } else {
            res.send('wrong password');
        }
    });
});



module.exports = router;
