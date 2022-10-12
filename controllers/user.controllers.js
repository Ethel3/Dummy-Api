import express from "express";
import UserSchema from "../models/user.models.js";

// login user
export const Login = async (req, res, next)=>{ 
    const { username } = req.body;
    try{
    const user = await UserSchema.find({ username, isdeleted: false})
    if (!user){
        return res.status(400).json({
            success: false,
            message: "Incorrect Username or password"
        })
    }
   
} catch (error){
    next(error);
  }
}

// add user
export const addUser = async (req, res, next)=>{
    try{
        const { fullname, username, email} = req.body;
        if (!fullname || !username || !email || !req.body.password){
        res.status(400)
        next (createError("Please fill all fields", 400))   
        }
    
        //
      }
    }