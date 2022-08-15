import express, { application } from "express";
import { admitStudent, getAllStudent } from "../controllers/student.controllers.js";

const StudentRoute = express.Router();

// Admit new students
StudentRoute.post("/", admitStudent)

// Get all students
StudentRoute.get("/", getAllStudent)

//Update Student details
StudentRoute.put("/", (req, res)=>{
    res.send("Updated student details");
})

//Dismiss student
StudentRoute.delete("/", (req, res)=>{
    res.send("Dismissed student")
})
export default StudentRoute