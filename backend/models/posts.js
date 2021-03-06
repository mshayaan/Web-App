// Joi is a validation module to validate data being received from the client end (front end)
const Joi = require("joi"); // This returns an object that we have named "Joi"

/*
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. 
It manages relationships between data, provides schema validation, and is 
used to translate between objects in code and the representation of those objects in MongoDB 
*/
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        minLength: 24,
        maxLength: 24,
    },

    userName: {
        type: String,
        required: true,
        default: " ",
        minLength: 3,
        maxLength: 150,
    },

    content: {
        type: String,
        required: true,
        default: " ",
        minLength: 3,
        maxLength: 1000,
    },

    // type: { //which type of post is it

    // },

    createdAt: {
        type: Date,
        default: new Date(),
    },
    lastEdited: {
        type: Date,
        default: null,
    },
    comments: [{
        userId: String,
        userName: String,
        content: String,
        data: Date,
        lastEdited: Date
    }],
    approved: {
        type: Boolean,
        default: true
    }



})

const Post = mongoose.model("post", postSchema);

function validatePost(post) {
    const schema = {
        content: Joi.string().min(3).max(1000).required(),
    };
    return Joi.validate(post, schema);
}
exports.Post = Post;
exports.validate = validatePost;