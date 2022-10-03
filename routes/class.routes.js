import express from "express";
import { deleteClass, getClass, updateClass, addNewClass } from "../controllers/class.controllers.js";

const ClassRoute = express.Router();

// Get all students
ClassRoute.get("/", getClass)
//Create new class
ClassRoute.post("/", addNewClass)
//Update class 
ClassRoute.put("/:id", updateClass)
//delete class
ClassRoute.delete("/:id", deleteClass)


export default ClassRoute
