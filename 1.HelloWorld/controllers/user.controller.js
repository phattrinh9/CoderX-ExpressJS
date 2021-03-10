var db=require('../db')
var shortid=require('shortid')

module.exports.index =(req, res) => {
    res.render('users/index',{
      users:db.get('users').value()})
  }

module.exports.search =(req,res)=>{
    var searchString =req.query.searchString;
    console.log (req.query)
    var matcheUsers=db.get('users').value().filter((user)=>{
        return user.name.toLowerCase().indexOf(searchString.toLowerCase()) !==-1
    })
    res.render('users/index',{
        users:matcheUsers,
        name:searchString
      })
    }

module.exports.create =(req,res)=>{
    res.render('users/create')
  }

module.exports.getid =(req,res)=>{
    var id=req.params.id;
    var user=db.get('users').find({id:id}).value()
    res.render('users/view',{
        user:user
      })
  }

module.exports.postCreate =(req,res)=>{
    req.body.id=shortid.generate()
    req.body.avatar=req.file.path.split('\\').slice(1).join('/')

    db.get('users').push(req.body).write()
    res.redirect('/users')
  }

