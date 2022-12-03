import express from "express";
import bcrypt from "bcryptjs";
import { CreateError } from "../utils/Error.js";
import userModels from "../models/user.models.js";

// register
export const register = async (req, res, next) => {
    const { username,full_name, email, password, name } = req.body;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    try {
      const user = new user({
        username,
        full_name,
        email,
        password: hash,
        name,
      });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  };

//login
export const login = async (req, res, next)=>{
    const { username } = req.body;
    try{
        const user = await userModels.findOne({ username });
        if (!user) return next(CreateError("User not found", 404));
        if (!bcrypt.compareSync(req.body.password, user.password))
        return next (CreateError("Incorrect name or password", 401));

        //token
        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET
        );
        const { password, ...userData } = user._doc;
        res.cookie("access_token", token, {httpOnly:true}).status(200).json({...userData});
     }catch (err){
        next(err);
     }
}

//logout 
export const logout = async (req, res, next)=>{
    const refresh_token = req.cookies?.refresh_token;
    console.log(refresh_token);
    try{
        const user = await userModels.findOne({token});
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        await userModels.findByIdAndUpdate(user._id, { token });
        res.clearCookie("refresh_token");
        res.status(200).json({
            success: true,
            message: "User logged out successfully",
        })
    }catch (err){
        next(err);
    }
}


