const express = require('express')
const router = express.Router()
const Oyster = require('../models/oysters.js')

router.get('/seed', (req, res) => {
  Oyster.create([
      {
        name:'Pacific',
        location:'Puget Sound',
        yearsToMaturity: 2,
        flavorProfile:['fruity', 'sweet', 'mild brininess']
      },
      {
        name:'Olympia',
        location:'Totten Inlet',
        yearsToMaturity: 4,
        flavorProfile:['coppery', 'high brininess']
      },
      {
        name:'Kumamoto',
        location:'Hammersley Inlet',
        yearsToMaturity: 3,
        flavorProfile:['cucumber', 'dill', 'sweet', 'mild brininess']
      },
      {
        name:'Shigoku',
        location:'Willapa Bay',
        yearsToMaturity: 2,
        flavorProfile:['sweet', 'cucumber', 'medium brininess']
      }
    ],//end array
    (err, data) => {
      res.redirect('/oysters')
    }//end af
  )//end Oyster.create
})//end route

//************************ ROUTES ***************************//

// get NEW //////////////////////////////////////////////
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

//get INDEX //////////////////////////////////////////////
router.get('/', (req, res) => {
  console.log(req.session);
  Oyster.find({}, (err, allOysters) => {
    res.render('index.ejs', {
      oyster: allOysters,
      currentUser: req.session.currentUser
    });
  })
})

//get EDIT //////////////////////////////////////////////
router.get('/:id/edit', (req, res) => {
  Oyster.findById(req.params.id, (err, foundOyster) => {
    res.render('edit.ejs',
      {
        oyster: foundOyster
      }
    )
  })
})

//update route
router.put('/:id', (req, res) => {
  Oyster.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel) => {
    res.redirect('/oysters')
  })
})

//DELETE //////////////////////////////////////////////
router.delete('/:id', (req, res) => {
  Oyster.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/oysters')
  })
})


//get SHOW //////////////////////////////////////////////
router.get('/:id', (req, res)=>{
    Oyster.findById(req.params.id, (error, foundOyster)=> {
        res.render('show.ejs', {
            oyster:foundOyster
        });
    })
})


module.exports = router;
