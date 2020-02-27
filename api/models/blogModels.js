const mongoose = require ('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    userName:{
        type: String,
        required:true
    },
    image: {
        type: String,
        required: true
    },
    blogName: {
        type: String,
        required: true
    },
    blogDescription: {
        type: String,
        required: true,
        minlength:5,
        maxlength:10
    },
    
    // timestamps: true,
},{ timestamps: true });

const Blog = new mongoose.model('blog', blogSchema);

module.exports = { Blog };