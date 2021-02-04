const express = require('express')
//const { generate } = require('shortid')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');

var userRoute=require('./routes/user.route.js')
var authRoute=require('./routes/auth.route.js')
var authMiddelware=require('./middelwares/auth.middelware')
const port = 3000

const app = express()

app.use(express.static('public'))
app.use(cookieParser('asdasd123qwe_a#adgnjsncu1209'));
app.set('view engine', 'pug')
//ooapp.set('views', './views')
app.get('/', (req, res) => {
  res.render('index',{name:'AAA'})
})



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/users',authMiddelware.requireAuth, userRoute);
app.use('/auth',authRoute);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
