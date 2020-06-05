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

    post.comments.push({
        userId: req.user._id,
        userName: req.user.first_name,
        content: req.body.content,
        data: new Date(),
        lastEdited: null

    })


    const result = await post.save();

    res.send(result);
});

module.exports = router;