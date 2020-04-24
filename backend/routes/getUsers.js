const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
    User
} = require("../models/user");


router.get("/", async (req, res) => {
    const users = await getUsers();

    res.send(users);

});


function getUsers() {
    const users = User.find({
        isAdmin: false
    }).sort({
        _id: -1
    }).select({
        first_name: 1,
        last_name: 1,
        email: 1
    });
    return users;
}

module.exports = router;