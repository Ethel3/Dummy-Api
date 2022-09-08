import express from "express";
import classModels from "../models/class.models.js";


// export const getClass = async (req, res, next)=>{ 
//     try{
//     const class = await classModels.create(req.body)
//     res.status(200).json({
//         success: true,
//         total: class.length,
//         data: class,
//         message: "Total class number "
//     });
// } catch (error){
//     next(error);
//   }
// }
