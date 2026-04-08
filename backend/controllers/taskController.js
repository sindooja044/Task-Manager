const Task=require('.models/Task.js')

const createTask= async (req, res)=>{
    try{
        const {title}=req.body;
        if(!title){
            return res.status(404).json({message:"404 title require"})
        }
        const task=Task.create({title})
        return res.status(201).json(title)
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}
module.exports={createTask}