import express from "express";


const TeacherRoute = express.Router();

// Admit new teachers
TeacherRoute.post("/", (req, res)=>{
    res.send("Admitted new teacher")
})

//get all teachers
TeacherRoute.get("/",(req, res)=>{
    res.send("These are all the staff members")
})

//Update teacher details
TeacherRoute.put("/", (req, res)=>{
    res.send("Updated teacher details")
})