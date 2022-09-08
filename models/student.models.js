import mongoose  from "mongoose";

const StudentSchema = new mongoose.Schema({  
name: {
    type: String,
    required: [true, "Name is required"]
  },
  lastName:{
    type: String,
    required: [true, "Last Name is required"]
  },
  age: {
    type: Number,
    default: 0,
  },
 _classId: {
    type: Number,
    ref: "Student",
    required: [true, "Student_id is required"],
    unique: true
  },
  year:{
    type: Number,
    required: true,
    default: new Date().getFullYear()
  }
});

export default mongoose.model("Student", StudentSchema) ;