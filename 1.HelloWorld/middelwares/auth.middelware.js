var db=require('../db')

module.exports.requireAuth =(req, res, next) => {
    if (!req.signedCookies.userId){
        res.redirect('auth/login')
        return
    }
    console.log(req.signedCookies.userId)
    var user=db.get('users').find({id:req.signedCookies.userId}).value()
    
    if (!user){
        res.redirect('auth/login')
        return
    }
    
    res.locals.user=user
    //console.log(res.locals.user)
    next()
}