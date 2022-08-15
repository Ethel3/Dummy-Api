import express from "express";

const FirstRoute = express.Router();

FirstRoute.get("/", (req, res) => {
    return res.send("Trying something new");
});

FirstRoute.post("/", (req, res) =>{
   return  res.send("Pray for me");
});

 FirstRoute.put("/", (req, res) =>{
    return res.send("Ready for something");
 });

 FirstRoute.delete("/", (req, res) => {
    return res.send("Deleting old stuffs");
 });

export default FirstRoute