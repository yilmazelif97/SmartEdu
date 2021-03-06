const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const pageRoute = require('./routes/pageRoute')

const courseRoute = require('./routes/courseRoute')
const categoryRoute = require('./routes/categoryRoute')
const userRoute = require('./routes/userRoute')


const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/smartedu-db').then(()=>{
    console.log('Db connected is succesful')
});



//template engine
app.set("view engine","ejs");

//global variable

global.userIN = null;



//MW

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'my_keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db' })
  }))



//route
app.use('*', (req,res,next)=>{
    userIN = req.session.userID;
    next();
})
app.use('/',pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)
app.use('/users', userRoute)


const port =3000;

app.listen(port,()=>{
    console.log(`Server çalışıyor ${port}`)
})

//Status Code: serverdan dönen response un durumuyla ilgili bilgi verir. 404 not found, 200 ok gibi.

//npm i ejs --> template engine

//session --> kullanıcı bilgilerinin sunucu tarafında tutulması