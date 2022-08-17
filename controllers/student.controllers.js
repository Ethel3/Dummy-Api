import studentModels from "../models/student.models.js";

// admit new students
export const admitStudent = async (req, res)=>{
    const student = await studentModels.create(req.body)
    // res.send("Add new student endpoint!");
    res.status(200).json(student)
}

// get all students
export const getAllStudent = (req, res)=>{
    res.send("All students in the school");
}

// update student details
export const updateStudent = (req, res)=>{
    res.send("Updated student details");
}

// dismiss student
export const deletestudent = (req, res)=>{
    res.send("Dismissed student")
}