import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user.routes.js';
mongoose.connect("mongodb://localhost:27017/").then(()=>{
    console.log('mongodb connected')
}).catch((err)=>{
    console.log(err.message);
})
const app = express();
app.listen(3000,()=>{
    console.log('Server running on port 3000');
})
app.use('/api/users',router);