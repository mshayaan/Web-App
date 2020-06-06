// Joi is a validation module to validate data being received from the client end (front end)
const Joi = require("joi"); // This returns an object that we have named "Joi"

/*
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. 
It manages relationships between data, provides schema validation, and is 
used to translate between objects in code and the representation of those objects in MongoDB 
*/
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const crimeSchema = new mongoose.Schema({
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

    type: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
    },

    description: {
        type: String,
        required: true,
        default: " ",
        minLength: 6,
        maxLength: 250,
    },

    area: {
        type: String,
        required: true,
        default: " ",
        minLength: 6,
        maxLength: 250,
    },

    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 255,
    },

    mobile_number: {
        type: String,
        default: "",
    },

    reportedAt: {
        type: Date,
        default: new Date(),
    },

    victimOrWitness: {
        type: String,
        required: true,
    },


    reportedPolice: {
        type: String,
        default: ""
    }




})

const Crime = mongoose.model("crime", crimeSchema);

function validateCrime(crime) {
    const schema = {
        type: Joi.string().min(3).max(40).required(),
        description: Joi.string().min(6).max(250).required(),
        area: Joi.string().min(6).max(250).required(),
        victimOrWitness: Joi.string().required(),
        reportedPolice: Joi.string().required(),
        mobile_number: Joi.string()
            .regex(/^[0-9]{3,30}$/)
            .min(11)
            .max(11),
        // email: Joi.string().min(5).max(255).required().email(),

    };
    return Joi.validate(crime, schema);
}
exports.Crime = Crime;
exports.validate = validateCrime;