// Joi is a validation module to validate data being received from the client end (front end)
const Joi = require("joi"); // This returns an object that we have named "Joi"

/*
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. 
It manages relationships between data, provides schema validation, and is 
used to translate between objects in code and the representation of those objects in MongoDB 
*/
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },

    middle_name: {
        type: String,
        default: " ",
        required: false,
    },

    last_name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
    },

    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
        unique: true,
    },

    mobile_number: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 1024,
    },
    isAdmin: Boolean
})

userSchema.methods.generateAuthToken = function () { // Can't use arrow function because they don't have "this"
    const token = jwt.sign({
        _id: this._id,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        isAdmin: this.isAdmin

    }, "jwtPrivateKey");
    return token;
}
const User = mongoose.model("user", userSchema);

function validateUser(user) {
    const schema = {
        first_name: Joi.string().min(3).max(50).required(),
        middle_name: Joi.string(),
        last_name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        mobile_number: Joi.string()
            .regex(/^[0-9]{3,30}$/)
            .min(11)
            .max(11),
        password: Joi.string()
            .min(5)
            .max(255)
            .required()
            .regex(/^[a-zA-Z0-9]{3,30}$/),
    };
    return Joi.validate(user, schema);
}
exports.User = User;
exports.validate = validateUser;