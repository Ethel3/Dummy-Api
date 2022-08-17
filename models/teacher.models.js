import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
      },
      age: {
        type: Number,
        default: 0,
      },
      teacher_id:{
        type: Number,
        ref: "Teacher",
        required: [true, "teacher_id is required"],
        unique: true
      }
})