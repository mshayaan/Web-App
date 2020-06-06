const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
    Crime,
    validate
} = require("../models/crime");
const auth = require("../middleware/auth");

router.post('/', auth, async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let crime = new Crime({
        userId: req.user._id,
        userName: req.user.first_name,
        email: req.user.email,
        type: req.body.type,
        description: req.body.description,
        area: req.body.area,
        mobile_number: req.body.mobile_number,
        reportedAt: new Date(),
        victimOrWitness: req.body.victimOrWitness,
        reportedPolice: req.body.reportedPolice,
    });

    await crime.save();

    res.send(crime);
});

module.exports = router;