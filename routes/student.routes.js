import express from "express";
import { admitStudent, deletestudent, getAllStudent, updateStudent } from "../controllers/student.controllers.js";

const StudentRoute = express.Router();

// Admit new students
StudentRoute.post("/", admitStudent)

// Get all students
StudentRoute.get("/", getAllStudent)

//Update Student details
StudentRoute.put("/:id", updateStudent)

//Dismiss student
StudentRoute.delete("/:id", deletestudent)


export default StudentRoute
