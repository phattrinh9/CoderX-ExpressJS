var Product=require('../models/product.model')

module.exports.index =(req, res) => {
//     var page = parseInt(req.query.page) || 1
//     var perpage =8

//     var start = (page - 1) * perpage
//     var end=page-perpage

//     var drop =(page - 1) * perpage
//     res.render('products/index',{

//       products:db.get('products').drop(drop).take(perpage).value()
//     })

  
 
  Product.find().then(function(products){
    res.render('products/index',{
      products:products
    })
  })
}
// module.exports.search =(req,res)=>{
//     var searchString =req.query.searchString;
//     console.log (req.query)
//     var matcheUsers=db.get('users').value().filter((user)=>{
//         return user.name.toLowerCase().indexOf(searchString.toLowerCase()) !==-1
//     })
//     res.render('products/index',{
//         users:matcheUsers,
//         name:searchString
//       })
//     }

