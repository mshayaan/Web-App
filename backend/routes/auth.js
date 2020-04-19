const config = require('config');
const jwt = require("jsonwebtoken");
const {
    User
} = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const router = express.Router();
const bcrypt = require("bcrypt");
// const passwordComplexity = require("joi-password-complexity");

router.post("/", async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({
        email: req.body.email,
    });
    if (!user) return res.status(400).send("Invalid email or password");
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid email or password");
    const token = jwt.sign({
        _id: user._id
    }, "jwtPrivateKey");
    res.send(token);
});

function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string()
            .min(5)
            .max(255)
            .required()
            .regex(/^[a-zA-Z0-9]{3,30}$/),
    };
    return Joi.validate(req, schema);
}

module.exports = router;