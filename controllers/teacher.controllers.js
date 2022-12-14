import express from "express";
import teacherModels from "../models/teacher.models.js"

//admit new teachers
export const adminTeacher = async (req, res,next)=>{
    try{
        const teacher = await teacherModels.create(req.body)
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
export const getAllTeacher = async (req, res,next)=>{
    try{
        const teacher = await teacherModels.find()
        res.status(200).json({
            success: true,
            total: teacher.length,
            data: teacher,
            message: "These are all the staff members"
        });
    } catch (error){
        next(error);
      }
  
}

//update teacher details
export const updateTeacher = async (req, res, next)=>{
    try{
        const teacher = await teacherModels.findByIdAndUpdate(req.body.id, req.body, {new:true})
        res.status(200).json({
            success: true,
            total: teacher.length,
            data: teacher,
            message: "Updated Teacher details"
        });
    } catch (error){
        next(error);
      }
}

//dismiss teacher
export const deleteTeacher = async (req, res, next)=>{
    try{
        const teacher = await teacherModels.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            total: teacher.length,
            data: teacher,
            message: "Deleted teacher details in the school"
        });
    } catch (error){
        next(error);
      }
}