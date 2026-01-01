import mongoose, { Schema } from "mongoose";

const LinkSchema = new mongoose.Schema({
    link: {
        type: String,
    },
    linkText: {
        type: String,
    }
})

const UserSchema = new mongoose.Schema(
    {
        handle: {
            type: String,
            required: [true, "Handle should be entered"],
            unique: [true, "Handle should be unqiue"],
            lowercase: true,
            trim: true
        },
        links: [LinkSchema],
        pic: {
            type: String,
            required: [true, "Picture is also needed"],
        },
        desc: {
            type: String
        }
    },
    { timestamps: true }
)

export default mongoose.models.User || mongoose.model("User",UserSchema)