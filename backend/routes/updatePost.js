const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
    Post
} = require("../models/posts");
const auth = require("../middleware/auth");

router.put("/:id", auth, async (req, res) => {

    const post = await Post.findById(req.params.id);
    if (!post) return;

    if (req.user._id != post.userId) res.status(400).send("Since this post does not belong to you, you don't have edititng rights");

    post.content = req.body.content;
    post.lastEdited = new Date();

    const result = await post.save();

    res.send(result);
});

module.exports = router;