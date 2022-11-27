import jwt from "jsonwebtoken";
import express from "express";
import CreateError from "../utils/Error.js";
export const verifyAccessToken = (
    req, res, next
)=>{
    let token;
    try{
        console.log(req.headers["authorization"]);
        token = req.headers.authorization?.split(" ")[1];
    }catch(err){
        next(err)
    }
}