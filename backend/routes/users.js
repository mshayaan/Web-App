const {
    User,
    validate
} = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
// const passwordComplexity = require("joi-password-complexity");

router.post("/", async (req, res) => {
    const {
        error
    } = validate(req.body);

    //   const complexityOptions = {
    //     min: 8,
    //     max: 30,
    //     lowerCase: 1,
    //     upperCase: 1,
    //     numeric: 1,
    //     requirementCount: 2,
    //   };

    //   passwordComplexity(complexityOptions).validate(req.body.password);

    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({
        email: req.body.email,
    });
    if (user) return res.status(400).send("User already registered");

    user = new User({
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        email: req.body.email,
        mobile_number: req.body.mobile_number,
        password: req.body.password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);


    await user.save();
    res.send(user);
});

module.exports = router;