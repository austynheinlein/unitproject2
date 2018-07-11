const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

//************************ ROUTES ***************************//
//NEW
router.get('/new', (req, res) => {
    res.render('users/new.ejs');
});

//ENCRYPT PASSWORD ON CREATE USER
router.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    console.log(req.body);
    User.create(req.body, (err, createdUser)=>{
        res.redirect('/oysters');
    });
});

module.exports = router;
