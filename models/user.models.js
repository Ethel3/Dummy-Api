import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        default: null,
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
    refreshtoken: {
        type: String
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    },
    isdeleted: {
        type: String,
    },
    token: {
        type: String,
    }
}, {timestamps: true})

export default mongoose.model("User", UserSchema);