const Product = require("../models/product.model");

exports.getProducts=async(req,res)=>{
    try {
       
       const Products=await Product.find() 
       if (!Products) {
        return res.status(404).json({message:"Products not found"});
    
       }
       return res.status(200).json({message:"Product Found",data:Products});
    } catch (error) {
        console.log(error);
    }
}

exports.getSingleProduct=async(req,res)=>{
    try {
        const _id=req.params._id;
       const Products=await Product.findOne({'_id':req.params._id}); 
       if (!Products) {
        return res.status(404).json({message:"Products not found"});
    
       }
       return res.status(200).json({message:"Product Found",data:Products});
    } catch (error) {
        console.log(error);
    }
}

exports.getSingleSearch=async(req,res)=>{
    try {
        const keyword=req.query.search
        ?{
            $or:[
                {"title.longTitle": {$regex:req.query.search,$options:"i"}},
                {"title.shortTitle": {$regex:req.query.search,$options:"i"}},
                
            ]
        }:{};
       const Products=await Product.find(keyword).find({
        _id:{$ne:req._id}
        
        
    }); 
       if (!Products) {
        return res.status(404).json({message:"Products not found"});
    
       }
       return res.status(200).json({message:"Product Found",data:Products});
    } catch (error) {
        console.log(error);
    }
}
