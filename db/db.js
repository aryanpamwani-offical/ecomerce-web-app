const mongoose  =require("mongoose");

const dbConnect=async()=>{
try {
    mongoose.connect(process.env.MONGO_URL);
        const connection=await mongoose.connection;
        connection.on("Connected",()=>{
            console.log("Mongodb Connected");
        });
        connection.on("Error",(err)=>{
            console.log("Mongodb Not Connected",+err);
            process.exit();
        });
} catch (error) {
    console.log("Internal Server Error");
    console.log(error);
}
}
module.exports=dbConnect