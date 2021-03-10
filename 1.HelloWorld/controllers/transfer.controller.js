const db = require("../db")
const shortid=require('shortid')

module.exports.create =(req,res)=>{
  res.render('./transfer/create.pug',{
    csrfToken: req.csrfToken()
  })
}
module.exports.postCreate =(req,res,next)=>{
    var data={
      "id": shortid.generate(),
      "account":req.body.account,
      "amount":parseInt(req.body.amount),
      "userId":req.signedCookies.userId
    }
    
    
    db.get('transfer').push(data).write()
    res.redirect('/transfer/create')
    next()
  }
