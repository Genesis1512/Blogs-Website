import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import blogroutes from './API/server.api.js'
import cors from'cors'

const app =express()
dotenv.config();

app.use(cors());
app.use(express.json());


app.use("/api/blog", blogroutes)

const PORT=process.env.PORT

mongoose.connect(process.env.MongoDb_URI)
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.log("MongoDB connection failed: ", err);
});

app.listen(PORT, (req, res)=>{
    console.log("server running at : 5000"  )
})

