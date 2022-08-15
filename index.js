import express from "express";
import dotenv from "dotenv";
import FirstRoute from "./routes/first.routes.js";

dotenv.config();
const PORT = process.env.PORT || 3000;



const app = express();
app.use('/first', FirstRoute)

app.post("/", (req, res) =>{
   return  res.send("Pray for me")
});
 app.put("/", (req, res) =>{
    return res.send("Ready for something");
 });

 app.delete("/", (req, res) => {
    return res.send("Deleting old stuffs");
 });

app.listen(PORT, () =>
   console.log(`App listening to ${PORT}!`),
);
