import express from "express";
import { adminTeacher, deleteTeacher, getAllTeacher, updateTeacher } from "../controllers/teacher.controllers.js";


const TeacherRoute = express.Router();

// Admit new teachers
TeacherRoute.post("/", adminTeacher)

//get all teachers
TeacherRoute.get("/",getAllTeacher)

//Update teacher details
TeacherRoute.put("/:id", updateTeacher)

//dismiss teacher
TeacherRoute.delete("/:id", deleteTeacher)


export default TeacherRoute