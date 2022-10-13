import express from "express";

import UserSchema from "../models/user.models.js";
import CreateError from "../utils/Error.js";
import GenerateToken from "../utils/Token.js";
import bcrypt from "bcryptjs";



// Register user
export const Register = async (req, res, next)=>{ 
    const { username } = req.body;

    try{
    const user = await UserSchema.findOne({ username, is_deleted: false})
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "Incorrect Username or password"
        })
    }
    //
    const { password,token, ...userData } = user._doc;
    let newToken = GenerateToken(user)

    if (user && (bcrypt.compareSync(req.body.password, user.password))) {
      await user.updateOne({ token: newToken.refreshToken}, { new:true })

      res.cookie("jwt", newToken.refreshToken, {httpOnly: true, samSite: "none", maxAge:24*60*60*1000, secure: true})
      userData.access_token = newToken.accessToken
      return res.status(200).json({
        success: true,
        user: userData,

      })
    }else {
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password"
      })
    }
   
} catch (error){
    next(error)
  }
};

//get user

export const getUsers = async (req, res, next) => {
  try {
      const users = await UserSchema.find({ is_deleted: false })
      // filter out password, is_deleted and is_super from user data
      const usersData = users.map((user) => {
          const { password, is_deleted, ...userData } = user._doc;
          return userData;
      })
      res.status(200).json({
          success: true,
          data: usersData,
          total: users.length
      })
  } catch (error) {
      next(error)
  }
}

// add user
export const addUser = async (req, res, next)=>{
    try{
        const { full_name, username, email} = req.body;
        if (!full_name || !username || !email || !req.body.password){
        res.status(400)
        next(CreateError("All inputs are required", 400))   
        }
    
        //Validate if user exist in the database 
        const userExists = await UserSchema.findOne({ email })
        if (userExists) {
            res.status(409)// this should not work
            next(CreateError("User already exists. Please Register", 400))
        }

        //
       
        let hash = bcrypt.hashSync(req.body.password); //Encrypt password
        const newUser = await UserSchema.create({
            full_name,
            username,
            email,
            password: hash
        })
      } catch (err){
        next(err)
      }}