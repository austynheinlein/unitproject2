const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

//************************ ROUTES ***************************//
//NEW
router.get('/new', (req, res) => {
    res.render('users/new.ejs');
});

//CREATE
router.post('/', (req, res) => {
    User.create(req.body, (err, createdUser)=>{
        res.redirect('/');
    });
});

module.exports = router;
