const asynchandler =require("express-async-handler")
const Todo= require("module/Todo")

exports.getAllTodos = asynchandler(async(req,res)=>{
    const result =await Todo.find()
    res.status(200).json({message:"Todo find success",result})
})
exports.addTodos = asynchandler(async(req,res)=>{
    const result =await Todo.create(req.body)
    res.status(200).json({message:"Todo add success",})
})
exports.updateTodos = asynchandler(async(req,res)=>{
    const result =await Todo.findByIdAndUpate( req.pareams.id, req.body)
    res.status(200).json({message:"Todo updata success",result})
})
exports.deleteTodos = asynchandler(async(req,res)=>{
    const result =await Todo.findByIdAnddelet(req.params.id)
    res.status(200).json({message:"Todo delete success",result})
})