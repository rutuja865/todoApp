const mongoose=require("mongoose")

require("dotenv").config(); //import from env to process object

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log("db connected")).catch((error)=>{
        console.error(error.message);
        console.log("error");
        process.exit(1);
    });
}
module.exports=dbConnect;