import express from "express";

import UserSchema from "../models/user.models.js"
import jwt from "jsonwebtoken"

export const getRefreshToken = async (req, res, next) => {
    try {

        const cookies = req.cookies
        if(!cookies?.jwt) return res.sendStatus(401) // unauthorized
        const refreshToken = cookies.jwt
        // console.log("token >>>>", refreshToken)
        const user = await UserSchema.findOne({token: refreshToken})

        // console.log(user)
        if(!user){
            console.log("No user found")
            return res.sendStatus(403) // forbidden
        }

         const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET || "")

        //  console.log("decoded >>>", decoded)

         const { password, token, ...updated_user } = user._doc 

         // now generate a new access token
         const accessToken = jwt.sign({id: decoded.id }, process.env.JWT_SECRET || "", {expiresIn: "1d"})  
        
         updated_user.access_token = accessToken
            // console.log(updated_user)
            res.status(201).json({
                success: true,
                user: updated_user,
                message: "new token generated"
            })  
            
        
    } catch (error) {
        // console.log("Refresh error");
        
        next(error)
    }
}

