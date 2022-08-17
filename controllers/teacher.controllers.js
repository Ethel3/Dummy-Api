import express from "express";
import teacherModels from "../models/teacher.models.js"

//admit new teachers
export const adminTeacher = async (req, res,next)=>{
    try{
        const student = await teacherModels.create(req.body)
        res.status(200).json({
            success: true,
            total: teacher.length,
            data: teacher,
            message: "New teacher added successfully"
        });
    } catch (error){
        next(error);
      }
}

//get all teachers
export const getAllTeacher = (req, res,next)=>{
    try{
        const student = await teacherModels.find()
        res.status(200).json({
            success: true,
            total: teacher.length,
            data: teacher,
            message: "These are all the staff members"
        });
    } catch (error){
        next(error);
      }
    res.send()
}

//update teacher details
export const updateTeacher = (req, res)=>{
    res.send("Updated teacher details")
}

//dismiss teacher
export const deleteTeacher =(req, res)=>{
    res.send("Dismissed teacher")
}