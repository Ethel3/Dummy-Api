import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: [true, "Please enter full name"],
    },
    username: {
        type: String,
        required: [true, "Please enter username"],
        unique: true,
    },
})