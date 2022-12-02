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

//signin
export const signin = async (req, res, next)=>{
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
        
    }
}


