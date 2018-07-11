const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/oysters';
const methodOverride = require('method-override')
const oystersController = require('./controllers/oysters.js')
const usersController = require('./controllers/users.js');
const sessionsController = require('./controllers/sessions.js');
const session = require('express-session');

//middleware
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret: "feedmeseymour", //some random string
    resave: false,
    saveUninitialized: false
}));
app.use('/sessions', sessionsController);
app.use('/oysters', oystersController)
app.use('/users', usersController);


//create a model with a creator
app.post('/articles', (req, res)=>{
    req.body.author = req.session.currentUser.username;
    Article.create(req.body, (err, createdArticle)=>{
        res.redirect('/articles');
    });
});

app.get('/', (req, res)=>{
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    });
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
