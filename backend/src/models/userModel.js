import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    user_role: {type: String, default: "user"}
})

export const User = mongoose.models.User || model("User", userSchema)