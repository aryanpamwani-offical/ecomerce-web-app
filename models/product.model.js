const mongoose  =require("mongoose");


const productSchema= new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantiity:Number,
    description:String,
    discount:String,
    tagline:String,
});
const Product= new mongoose.model("Product",productSchema);
module.exports =Product;