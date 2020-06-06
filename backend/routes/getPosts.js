const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
    Post
} = require("../models/posts");
const auth = require("../middleware/auth");



router.get("/", auth, async (req, res) => {
    const posts = await getPosts();

    res.send(posts);

});


function getPosts() {
    const posts = Post.find({
        approved: true
    }).sort({
        _id: -1
    }).select({
        userName: 1,
        content: 1,
        createdAt: 1,
        lastEdited: 1,
        comments: 1,
    });
    return posts;
}

module.exports = router;