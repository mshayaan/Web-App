const config = require("config");
const register = require("./routes/register");
const auth = require("./routes/auth");
const getUsers = require("./routes/getUsers");
const deleteUser = require("./routes/deleteUser");
const express = require("express");
const Joi = require("joi");
const mongoose = require("mongoose");
const app = express();

// if (!config.get("jwtPrivateKey")) {
//   console.error("FATAL ERROR: jwtPrivateKey is not defined.");
//   process.exit(1);
// }
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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));