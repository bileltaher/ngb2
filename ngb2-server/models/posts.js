const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    }
});
module.exports = Post = mongoose.model("post", PostSchema);