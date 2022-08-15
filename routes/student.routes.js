import express, { application } from "express";

const StudentRoute = express.Router();

// Admit new students
StudentRoute.post("/", (req, res)=>{
    res.send("Add new student endpoint!");
})

// Get all students
StudentRoute.get("/", (req, res)=>{
    res.send("All students in the school");
})

//Update Student details
StudentRoute.put("/", (req, res)=>{
    res.send("Updated student details");
})


export default StudentRoute