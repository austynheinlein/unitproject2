const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';
const methodOverride = require('method-override')
const oystersController = require('./controllers/oysters.js')
const usersController = require('./controllers/users.js');


//middleware
app.use('/oysters', oystersController)
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.use('/users', usersController);

//listener
app.listen(PORT, () => {
  console.log("***LISTENING***");
})
//connect mongoose
mongoose.connect(mongoUri, { useNewUrlParser: true});
mongoose.connection.on('open', () => {
  console.log('***MONGOOSE CONNECTED***');
})
