import express from "express";
import { adminTeacher } from "../controllers/teacher.controllers.js";


const TeacherRoute = express.Router();

// Admit new teachers
TeacherRoute.post("/", adminTeacher)

//get all teachers
TeacherRoute.get("/",(req, res)=>{
    res.send("These are all the staff members")
})

//Update teacher details
TeacherRoute.put("/", (req, res)=>{
    res.send("Updated teacher details")
})

//dismiss teacher
TeacherRoute.delete("/", (req, res)=>{
    res.send("Dismissed teacher")
})