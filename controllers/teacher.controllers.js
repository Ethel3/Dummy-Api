//admit new teachers
export const adminTeacher = (req, res)=>{
    res.send("Admitted new teacher")
}

//get all teachers
export const getAllTeacher = (req, res)=>{
    res.send("These are all the staff members")
}

//update teacher details
export const updateTeacher = (req, res)=>{
    res.send("Updated teacher details")
}

//dismiss teacher
export const deleteTeacher =(req, res)=>{
    res.send("Dismissed teacher")
}