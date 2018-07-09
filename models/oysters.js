const mongoose = require('mongoose');

const oysterSchema = new mongoose.Schema({
    name:String,
    location:String,
    yearsToMaturity: Number,
    readyToEat: Boolean,
    flavorNotes: [String]
});

const Oyster = mongoose.model('Oyster', oysterSchema);

module.exports = Oyster;
