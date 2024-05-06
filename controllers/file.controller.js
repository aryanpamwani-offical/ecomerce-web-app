const File  =require("../models/file.models");
const uploadOnCloudinary =require('../utils/cloudinary/cloudinary');

const uploadFileController=async(req,res)=>{
try {
    
    const imgLocalPath =req.file?.path;
   
    console.log(imgLocalPath);
    if (!imgLocalPath) {
        return res.status(401).json({message:"Image is required"})
    }
    const image = await uploadOnCloudinary(imgLocalPath);
    if (!image) {
       return res.status(400).json({message:"Please upload image"});
    }
  const savedFiles=await File.create({
    img:image.url
   })
   return res.status(200).json({
    message:"Image Uploaded Sucessfully",
    savedFiles

})
} catch (error) {
    console.log(error)
}
};

module.exports=uploadFileController;