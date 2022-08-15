import express from "express";
import dotenv from "dotenv";
import StudentRoute from "./routes/student.routes.js";

dotenv.config();


const app = express();
app.use('/student', StudentRoute)

// home page
app.get("/" , (req, res) => {
    res.json({
        message: "You're Welcome to my student API",
        author:"Ethel"
    })
})


 const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
   console.log(`App listening to ${PORT}!`),
);
