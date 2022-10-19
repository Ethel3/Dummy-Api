import express from "express";
import dotenv from "dotenv";
import StudentRoute from "./routes/student.routes.js";
import TeacherRoute from "./routes/teacher.routes.js";
import ClassRoute from "./routes/class.routes.js";
import DBCONNECT from "./dbconnections.js";
import refreshRouter from "./routes/refreshtoken.routes.js";
import logoutRouter from "./routes/logout.routes.js";
import bodyParser from "body-parser";


dotenv.config();
const app = express();
app.use(bodyParser.json())
app.use('/student', StudentRoute)
app.use('/teacher', TeacherRoute)
app.use('/class', ClassRoute)
app.use('/refresh', refreshRouter)
app.use('/logout', logoutRouter)

app.use(Handler)

// home page
app.get("/" , (req, res, next) => {
    res.json({
        message: "You're Welcome to my student API",
        author:"Ethel"
    })
})


 const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>{
    DBCONNECT();
    console.log(`App listening to ${PORT}!`);
})
