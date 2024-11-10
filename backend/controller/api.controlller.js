
import BlogModel from '../Model/blog.model.js'
export const addBlog = async(req, res)=>{
    try{
    const data  = req.body;
    const newData=new BlogModel(data)
    await newData.save()
    res.status(201).send({message:"Blog added" ,data:newData})
    }
    catch(error){
        res.status(500).send({message:"Blog faled",error: error.message})
        console.log(error.message)
    }
}

export const getAll= async (req, res)=>
    {
        try{
            const data= await BlogModel.find({})
           
            res.status(200).send({message:"Blog recived" ,data:data})
    
        }
        catch(error){
            res.status(500).send({message:"Blog faled",error: error.message})       
        }
    }


    export const getById= async(req, res)=>
        {
            try{
                const {id}= req.params
                const data=await BlogModel.findById(id)
                res.status(200).send({message:"got success", data:data})
            }
            catch(error){
                res.status(500).send({message:"Blog cant be reciever",error: error.message})   
            }
        }
export const editId=async(req, res)=>
    {
        try{
            const {id}=req.params
            const data = req.body
            const newData=await BlogModel.findByIdAndUpdate(id, data)
            res.status(200).send({message:"got success", data:data})
        }
        catch(error){
            res.status(500).send({message:"Blog cant be reciever",error: error.message})
        }
    }

    export const deletId= async(req, res)=>
        {
            try{
                const {id}=req.params
                const data = await BlogModel.findByIdAndDelete(id)
                res.status(200).send({message:"got success", data:data})
            }
            catch(error){
                res.status(500).send({message:"Blog cant be reciever",error: error.message})
            }
        }