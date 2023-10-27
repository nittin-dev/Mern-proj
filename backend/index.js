import express from 'express';
import mongoose from 'mongoose';
const app = express();
mongoose.connect("mongodb://localhost:27017/").then(()=>{
    console.log('mongodb connected')
}).catch((err)=>{
    console.log(err.message);
})
app.listen(3000,()=>{
    console.log('Server running on port 3000');
})