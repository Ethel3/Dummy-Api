import express from "express";
import ClassModels from "../models/class.models.js";

//get class members
export const getClass = async (req, res, next)=>{ 
    try{
    const classes = await ClassModels.find(req.body)
    res.status(200).json({
        success: true,
        total: classes.length,
        data: classes,
        message: "Total class number "
    });
} catch (error){
    next(error);
  }
}
//updating classes
export const updateClass = async (req, res, next)=>{ 
    try{
    const classes = await ClassModels.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json({
        success: true,
        total: classes.length,
        data: classes,
        message: "Updated  class number "
    });
} catch (error){
    next(error);
  }
}
//deleting classes
export const deleteClass = async (req, res, next)=>{ 
    try{
    const classes = await ClassModels.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        total: classes.length,
        data: classes,
        message: "Deleted  class numbers "
    });
} catch (error){
    next(error);
  }
}
