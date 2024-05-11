const mongoose  =require("mongoose");

const dotenv  =require('dotenv');
dotenv.config({path:"./.env"})  
const contactSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  subject:{
    type:String,
    required:true,
  },
  detail:{
    type:String,
    required:true,
  },
},{timestamps:true});

const Contact=mongoose.model("Contact",contactSchema);
module.exports= Contact