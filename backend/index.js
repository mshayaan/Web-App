const config = require("config");
const users = require("./routes/users");
const express = require("express");
const Joi = require("joi");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const app = express();

// if (!config.get("jwtPrivateKey")) {
//   console.error("FATAL ERROR: jwtPrivateKey is not defined.");
//   process.exit(1);
// }
//Connecting with DataBase
mongoose
    .connect(
        `mongodb+srv://Shahzaib:Shazu000111@cluster0-eeeqg.mongodb.net/test?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(express.json()); // This enables parsing of Json objects in the body of requests
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));