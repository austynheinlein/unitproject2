const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';

//******** ROUTES ********//
// app.get('/', (req, res) => {
//   res.send('this works')
// })
//get index
app.get('/', (req, res) => {
    res.render('index.ejs');
});

//listener
app.listen(PORT, () => {
  console.log("***LISTENING***");
})
//connect mongoose
mongoose.connect(mongoUri, { useNewUrlParser: true});
mongoose.connection.on('open', () => {
  console.log('***MONGOOSE CONNECTED***');
})
