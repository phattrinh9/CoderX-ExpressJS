var mongooes=require('mongoose')

var productSchema=new mongooes.Schema({
    name:String,
    price:Number,
    linkImage:String,
    discount:Number,
    dateOfEntry:Date,
    description:String
})

var Product=mongooes.model('Product',productSchema,'products')

module.exports=Product