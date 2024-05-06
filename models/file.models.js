const mongoose  =require("mongoose");

const uploadFileSchema=new mongoose.Schema({
    img:{
        type:String,
        required:true, 
    },
});
const File=new mongoose.model('File',uploadFileSchema);
module.exports= File