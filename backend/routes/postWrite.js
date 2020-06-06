const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
    Post,
    validate
} = require("../models/posts");
const auth = require("../middleware/auth");

router.post('/', auth, async (req, res) => {
    const {
        error
    } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let post = new Post({
        userId: req.user._id,
        userName: req.user.first_name,
        content: req.body.content, //get this from the content box at frontend
        createdAt: new Date(),
        lastEdited: null,
        comments: [],
        approved: true
    });

    await post.save();

    res.send(post);
});

module.exports = router;