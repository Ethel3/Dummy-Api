import mongoose  from "mongoose";

const StudentSchema = new mongoose.Schema({  
name: {
    type: String,
    required: [true, "Name is required"]
  },
  age: {
    type: Number,
    default: 0,
  },
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: [true, "Student is required"]
  },
  year:{
    type: Number,
    required: true,
    default: new Date().getFullYear()
  }
});

export default mongoose.model("Student", StudentSchema) ;