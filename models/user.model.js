const mongoose  =require("mongoose");
const bcryptjs  =require('bcryptjs');
const dotenv  =require('dotenv');
dotenv.config({path:"./.env"})  
const userSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
},{timestamps:true});
userSchema.pre("save", async function (next) {
  let user=this;
  if(!user.isModified("password")){
    
    next()
  } 
  try {
    let salt = await bcryptjs.genSalt(10);
  let hashPassword = await bcryptjs.hash(user.password,salt);
  hashPassword=user.password;
} catch (error) {
    next(error)
    
  }
  
 
})

userSchema.methods.isPasswordCorrect = async function(password){
  
  return await bcryptjs.compare(password, this.password)
}

const Users=mongoose.model("Users",userSchema);
module.exports= Users