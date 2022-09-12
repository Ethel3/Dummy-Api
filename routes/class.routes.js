import express from "express";
import { deleteClass, getClass, updateClass } from "../controllers/class.controllers.js";

const ClassRoute = express.Router();

// Get all students
ClassRoute.get("/", getClass)
//Update class 
ClassRoute.put("/", updateClass)
//delete class
ClassRoute.delete("/", deleteClass)


export default ClassRoute
