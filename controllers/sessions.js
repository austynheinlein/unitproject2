const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

//************************ ROUTES ***************************//

//NEW
router.get('/new', (req, res) => {
    res.render('sessions/new.ejs');
});

//CREATE
router.post('/', (req, res)=>{
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if(req.body.password == foundUser.password){
            // req.session.currentUser = foundUser;
            // res.redirect('/oysters');
            console.log(req);
            res.send('LOGIN')
        } else {
            res.send('wrong password');
        }
    });
});

//DELETE
router.delete('/', (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/oysters');
    });
})

//COMPARE PASSWORD ON LOGIN
// router.post('/', (req, res)=>{
//     User.findOne({ username: req.body.username },(err, foundUser) => {
//         if( bcrypt.compareSync(req.body.password, foundUser.password) ){
//             req.session.currentUser = foundUser;
//             res.redirect('/oysters');
//         } else {
//             res.send('wrong password');
//         }
//     });
// });


module.exports = router;
