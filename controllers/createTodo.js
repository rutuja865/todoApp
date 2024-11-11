const Todo=require("../models/Todo");
exports.createTodo=async(req,res)=>{
    try{
        //extract title,description from request body
const {title,description}=req.body;
const response=await Todo.create({title,description});
//send a response json with success flag
res.status(200).json({
    success:true,
    data:response,
    message:"entry created"
});
    }catch(error){
console.log("error",error);
console.error(error);
res.status(500).json({
    sucess:false,
    data:"internal server error",
    message:err.message
})
    }
}