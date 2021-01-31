const express = require('express')
//const { generate } = require('shortid')
var bodyParser = require('body-parser')

var userRoute=require('./routes/user.route.js')

const port = 3000

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')
//ooapp.set('views', './views')
app.get('/', (req, res) => {
  res.render('index',{name:'AAA'})
})



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/users',userRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
