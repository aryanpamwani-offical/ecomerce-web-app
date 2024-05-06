const Users =require("../models/user.model");
const bcryptjs=require('bcryptjs')
const dotenv=require('dotenv')
const generateToken =require("../utils/auth/generateToken");
dotenv.config({path:"./.env"})  

const registerController=async(req,res)=>{
  try {
    const {name,email,password}=req.body;
    if (!name || !email || !password) {
      return res.status(402).json({message:"Please fill all the fields"});
    }
    const userExist=await Users.findOne({email});
    if (userExist) {
      return res.status(403).json({message:"User Already Exist"});
    };
    const salt=await bcryptjs.genSalt(10);
    const hashPassword=await bcryptjs.hash(password,salt)
    const response=await Users.create({name,email,password:hashPassword});
    
    return res.status(200).json({message:"Account Created Sucessfully",token:generateToken(response._id)})
  } catch (error) {
    console.log(error);
  }
}
const loginController=async(req,res)=>{
  try {
    const {email,password}=req.body;
    if ( !email || !password) {
      return res.status(402).json({message:"Please fill all the fields"});
    }
    
    const user=await Users.findOne({email});
    if (!user) {
      return res.status(403).json({message:"User Does not Exist"});
    };
    const checkPassword=await bcryptjs.compare(password,user.password);
    if (!checkPassword) {
      return res.status(407).json({message:"Password does not match"});
    }
    
    
    return res.status(200).json({
      message:"User Logged in sucessfully",
      token:generateToken(user._id)
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports= {registerController,loginController}