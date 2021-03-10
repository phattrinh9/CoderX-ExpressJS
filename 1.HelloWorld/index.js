require('dotenv').config()
const express = require('express')

//const { generate } = require('shortid')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var userRoute=require('./routes/user.route.js')
var authRoute=require('./routes/auth.route.js')
var productRoute=require('./routes/product.route.js')
var authMiddelware=require('./middelwares/auth.middelware')
var sessionMiddelware=require('./middelwares/session.middelware')
var cartRoute=require('./routes/cart.route')
var transferRoute=require('./routes/transfer.route')
var csrf = require('csurf')
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true , useUnifiedTopology: true});

const port = 3000

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddelware)

app.set('view engine', 'pug')
//ooapp.set('views', './views')
app.get('/', (req, res) => {
  res.render('index',{name:'AAA'})
})



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use('/users',authMiddelware.requireAuth, userRoute);
app.use('/auth',authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute)
app.use(csrf({ cookie: true }))
app.use('/transfer', transferRoute)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
