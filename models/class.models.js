import mongoose  from "mongoose";

const ClassSchema = new mongoose.Schema({  
name: {
    type: String,
     trim: true,
     minlength: 3
},
numberofStudents:{
    type: Number,
    minlength: 3
}
})



export default mongoose.model("Class", ClassSchema);