const express = require('express')
const router = express.Router()
const Oyster = require('../models/oysters.js')

router.get('/seed', (req, res) => {
  Oyster.create([
    {
      name: 'Pacific',
      location: 'Puget Sound',
      yearsToMaturity: 2,
      flavorProfile: ['fruity', 'sweet', 'mild brininess']
    },
    {
      name: 'Olympia',
      location: 'Totten Inlet',
      yearsToMaturity: 4,
      flavorProfile: ['coppery', 'high brininess']
    },
    {
      name: 'Kumamoto',
      location: 'Hammersley Inlet',
      yearsToMaturity: 3,
      flavorProfile: ['cucumber', 'dill', 'sweet', 'mild brininess']
    }
  ])
})

//************** ROUTES **************//


module.exports = router;
