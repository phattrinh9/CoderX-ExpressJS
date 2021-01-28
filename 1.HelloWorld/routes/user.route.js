const  express  = require("express");
var db=require('../db')
var shortid=require('shortid')
var controller=require('../controllers/user.controller')

var router=express.Router();

router.get('/', (req, res) => {
    res.render('users/index',{
      users:db.get('users').value()})
  })
router.get('/search',(req,res)=>{
  var searchString =req.query.searchString;
  console.log (req.query)
  var matcheUsers=db.get('users').value().filter((user)=>{
      return user.name.toLowerCase().indexOf(searchString.toLowerCase()) !==-1
  })
   
  
  res.render('users/index',{
    users:matcheUsers,
    name:searchString
  })
})
  
  // Create
router.get('/create', (req,res)=>{
  res.render('users/create')
})
  
router.get('/:id', (req,res)=>{
  var id=req.params.id;
  var user=db.get('users').find({id:id}).value()
  res.render('users/view',{
      user:user
    })
})
  
router.post('/create',controller.postCreate)

module.exports=router