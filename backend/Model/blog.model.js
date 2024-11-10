import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const Blog = new Schema({
  name:{
    type:String, 
    required:true,
  },
  author:{
    type:String, 
    required:true,
  },
  description:{
    type:String, 
    required:true,
  },
  image:
  {
    type:String, 
    required:true,
  }
});

const BlogModel = mongoose.model('Blog', Blog);

export default BlogModel