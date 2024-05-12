const dotenv=require('dotenv');
const Contact = require('../models/contact.model');
const nodemailer = require('nodemailer')
dotenv.config({path:"./.env"})  
const contactController=async(req,res)=>{
    try {
        const {name,email,subject,detail}=req.body;
        if (!name || !email || !subject || !detail) {
          return res.status(402).json({message:"Please fill all the fields"});
        }
        const transporter = nodemailer.createTransport({
          host: process.env.TRANSPORTER_HOST,
          port: process.env.TRANSPORTER_PORT,
          auth: {
            user: process.env.TRANSPORTER_USER,
            pass: process.env.TRANSPORTER_PASS
          }
        });
          const mailOptions={
            from: "work.aryanpamwani@gmail.com", 
            to: email, 
            subject:"Thanks For contacting us.", 
            html: "<b>We Will Reach Out You Sooner</b>", 
          };
          const emailResponse = await transporter.sendMail(mailOptions);
        const saveContact=await Contact.create({
            name,
            email,
            subject,
            detail
        });
        
          
        return res.status(200).json({message:"Contact Saved Successfully ",mail:emailResponse,data:saveContact});
    } catch (error) {
        console.log(error);
    }
}
module.exports=contactController