const register = require("./routes/register");
const auth = require("./routes/auth");
const postWrite = require("./routes/postWrite");
const getPosts = require("./routes/getPosts");
const updatePost = require("./routes/updatePost");
const deletePost = require("./routes/deletePost");
const commentPost = require("./routes/commentPost");
const crimePost = require("./routes/crimePost");
const getUsers = require("./routes/getUsers");
const deleteUser = require("./routes/deleteUser");
const myInfo = require("./routes/myInfo");
const express = require("express");
const Joi = require("joi");
const mongoose = require("mongoose");
const app = express();


//Connecting with DataBase
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
mongoose
    .connect(
        `mongodb+srv://Shahzaib:Shazu000111@cluster0-eeeqg.mongodb.net/test?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(express.json()); // This enables parsing of Json objects in the body of requests
app.use("/api/signup", register);
app.use("/api/auth", auth);
app.use("/api/getUsers", getUsers);
app.use("/api/deleteUser", deleteUser);
app.use("/api", myInfo);
app.use("/api/postWrite", postWrite);
app.use("/api/getPosts", getPosts);
app.use("/api/updatePost", updatePost);
app.use("/api/deletePost", deletePost);
app.use("/api/commentPost", commentPost);
app.use("/api/crimePost", crimePost);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));