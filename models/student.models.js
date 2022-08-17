import mongoose  from "mongoose";

const StudentSchema = new mongoose.schema({  
name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models("Student", StudentSchema) 