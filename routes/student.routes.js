import express, { application } from "express";
import { admitStudent, deletestudent, getAllStudent, updateStudent } from "../controllers/student.controllers.js";

const StudentRoute = express.Router();

// Admit new students
StudentRoute.post("/", admitStudent)

// Get all students
StudentRoute.get("/", getAllStudent)

//Update Student details
StudentRoute.put("/", updateStudent)

//Dismiss student
StudentRoute.delete("/", deletestudent)


export default StudentRoute
