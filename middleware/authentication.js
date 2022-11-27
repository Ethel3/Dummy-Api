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
        const decoded = jwt.verify(
            token || "",
            process.env.JWT_SECRET || "")
            //expiry
            if (decoded.exp < Date.now()/1000){
                return next(CreateError("Token has expired", 401))
            }
    }catch(err){
        next(err)
    }
    if (!token){
        CreateError("No token", 403);
    }
}