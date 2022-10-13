import express from "express";
import UserSchema from "../models/user.models.js"
import bcrypt from "bcryptjs"



// Register user
export const Register = async (req, res, next)=>{ 
    const { username } = req.body;

    try{
    const user = await UserSchema.findOne({ username, isdeleted: false})
    if (!user) {
        return res.status(400).json({
            success: false,
            message: "Incorrect Username or password"
        })
    }
   
} catch (error){
    next(error)
  }
};

// add user
export const addUser = async (req, res, next)=>{
    try{
        const { fullname, username, email} = req.body;
        if (!fullname || !username || !email || !req.body.password){
        res.status(400)
        next(CreateError("All inputs are required", 400))   
        }
    
        //Validate if user exist in the database 
        const userExists = await UserSchema.findOne({ email })
        if (userExists) {
            res.status(409)// this should not work
            next(CreateError("User already exists. Please Register", 400))
        }
      } 
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);

      //create user in our database
      const user = await UserSchema.create({
        fullname,
        email: email.toLowerCase(), // sanitize: convert email to lower
        password: encryptedPassword,
      });

      //create token
      const token = jwt.sign(
        {user_id: user_id, email},
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
      );
      //save user token
      user.token = token;

      //rerturn new user
      res.status(201).json(user);
    } catch (error){
        console.log(error);
    }
    


    //Login user