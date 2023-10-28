import user from "../modal/userModal.js";
import bcryptjs from 'bcryptjs';
export const auth = async(req,res) =>{
const {username,email,password }  = req.body;
const hashedPassword = bcryptjs.hashSync(password,10);
 const newUser = new user({username,email,password : hashedPassword});
 await newUser.save();
 res.status(201).json({message : "User created Successfully"});
};