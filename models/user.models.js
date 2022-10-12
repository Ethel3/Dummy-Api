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
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
    },
    refresh_token: {
        type: String
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    },
    is_deleted: {
        type: String,
    },
    token: {
        type: String,
    }
}, {timestamps: true})

export default mongoose.model("User", UserSchema);