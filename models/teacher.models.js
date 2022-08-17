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
})