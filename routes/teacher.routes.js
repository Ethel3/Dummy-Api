import express from "express";


const teacherRoute = express.Router();

// Admit new teachers
teacherRoute.post("/", (req, res)=>{
    res.send("Admitted new teacher")
})