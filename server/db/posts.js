import mongoose from "mongoose"

const postSchema = mongoose.Schema({

    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const Post = mongoose.model("post", postSchema)

export default Post
