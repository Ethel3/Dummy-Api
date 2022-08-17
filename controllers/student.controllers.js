import express from "express";
import studentModels from "../models/student.models.js";

// admit new students
export const admitStudent = async (req, res, next)=>{
    try{
    const student = await studentModels.create(req.body)
    // res.send("Add new student endpoint!");
    res.status(200).json({
        success: true,
        total: student.length,
        data: student,
        message: "student added successfully"
    });
} catch (error){
    next(error);
  }
}

// get all students
export const getAllStudent = async (req, res, next)=>{
    try{
        const student = await studentModels.find()
        res.status(200).json({
            success: true,
            total: student.length,
            data: student
        });
    } catch (error){
        next(error);
      }
    res.send("All students in the school");
}

// update student details
export const updateStudent = (req, res)=>{
    res.send("Updated student details");
}

// dismiss student
export const deletestudent = (req, res)=>{
    res.send("Dismissed student")
}