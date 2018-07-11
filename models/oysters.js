const mongoose = require('mongoose');

const oysterSchema = new mongoose.Schema({
    name:String,
    image:String,
    location:String,
    yearsToMaturity: Number,
    flavors: String
});

const Oyster = mongoose.model('Oyster', oysterSchema);

module.exports = Oyster;
