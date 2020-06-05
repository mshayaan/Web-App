const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
    User
} = require("../models/user");
const auth = require("../middleware/auth");

router.get('/me', auth, async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
});

module.exports = router;