const dotenv=require('dotenv');
const Contact = require('../models/contact.model');
dotenv.config({path:"./.env"})  
const contactController=async(req,res)=>{
    try {
        const {name,email,subject,detail}=req.body;
        if (!name || !email || !subject || !detail) {
          return res.status(402).json({message:"Please fill all the fields"});
        }
        const saveContact=await Contact.create({
            name,
            email,
            subject,
            detail
        });
        return res.status(200).json({message:"Contact Saved Successfully ",data:saveContact});
    } catch (error) {
        console.log(error);
    }
}
module.exports=contactController