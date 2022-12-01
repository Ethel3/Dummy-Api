import express from "express";
import bcrypt from "bcryptjs";
import { CreateError } from "../utils/Error.js";
import userModels from "../models/user.models.js";

// register
export const register = async (req, res, next) => {
    const { username, email, password, name } = req.body;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    try {
      const user = new user({
        username,
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




