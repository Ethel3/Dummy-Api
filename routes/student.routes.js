import express, { application } from "express";
import { admitStudent, getAllStudent, updateStudent } from "../controllers/student.controllers.js";

const StudentRoute = express.Router();

// Admit new students
StudentRoute.post("/", admitStudent)

// Get all students
StudentRoute.get("/", getAllStudent)

//Update Student details
StudentRoute.put("/", updateStudent)

//Dismiss student
StudentRoute.delete("/", (req, res)=>{
    res.send("Dismissed student")
})
export default StudentRoute