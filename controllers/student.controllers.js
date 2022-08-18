import express from "express";
import studentModels from "../models/student.models.js";

// admit new students
export const admitStudent = async (req, res, next)=>{ 
    try{
    const student = await studentModels.create(req.body)
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
            data: student,
            message: "All students in the school"
        });
    } catch (error){
        next(error);
      }
}

// update student details
export const updateStudent = async (req, res, next)=>{
    try{
        const student = await studentModels.findByIdAndUpdate({_id: req.body.id})
        res.status(200).json({
            success: true,
            total: student.length,
            data: student,
            message: "Updated students details in the school"
        });
    } catch (error){
        next(error);
      }
  
}

// dismiss student
export const deletestudent = async (req, res, next)=>{
    try{
        const student = await studentModels.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            total: student.length,
            data: student,
            message: "Dismissed students details in the school"
        });
    } catch (error){
        next(error);
      }
    
    
}