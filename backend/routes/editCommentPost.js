const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
    Post
} = require("../models/posts");
const auth = require("../middleware/auth");

router.put("/:postid/:commentid", auth, async (req, res) => {

    const post = await Post.findById(req.params.id);
    if (!post) return;

    post.comments.find((id) => id == req.params.id)


    const result = await post.save();

    res.send(result);
});

module.exports = router;