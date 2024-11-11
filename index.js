// const express=require("express") //import using require after installation
// const app=express(); //make instance of server

// //listen to server on a port
// app.listen(3000,()=>{
//     console.log("hi");
// })

const express=require("express");
const app=express();

require("dotenv").config(); 
const PORT=process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo API
const todoRoutes=require("./routes/todos");

//mount the todo API routes
app.use("api/v1",todoRoutes)

// //listen to server on a port
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})