const express=require("express") //import using require after installation
const app=express(); //make instance of server

//listen to server on a port
app.listen(3000,()=>{
    console.log("hi");
})