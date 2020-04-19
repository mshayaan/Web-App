//Express, is a web application framework for Node.js. It is designed for building web applications and APIs.
const express = require("express"); //This returns a function, we are storing the function in varaible "express".
const app = express(); //We have called the express function and it has returned us the object of type express, we are calling the object "app"
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Joi is a validation module to validate data being received from the client end (front end)
const Joi = require("joi"); // This returns an object that we have named "Joi"

/*
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. 
It manages relationships between data, provides schema validation, and is 
used to translate between objects in code and the representation of those objects in MongoDB 
*/
const mongoose = require("mongoose");
//Connecting with DataBase
mongoose
  .connect(
    `mongodb+srv://Shahzaib:Shazu000111@cluster0-eeeqg.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB...", err));

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: ""
  },

  middle_name: {
    type: String,
    default: ""
  },

  last_name: {
    type: String,
    default: ""
  },

  email: {
    type: String,
    default: ""
  },

  mobile_number: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  }
});

const User = mongoose.model("User", userSchema);

app.use(express.json()); // This enables parsing of Json objects in the body of requests

app.post("/api/signup", (req, res) => {
  const schema = {
    first_name: Joi.string()
      .min(3)
      .required(),
    middle_name: Joi.string(),
    last_name: Joi.string()
      .min(3)
      .required(),
    email: Joi.string().email({
      minDomainAtoms: 2
    }),
    mobile_number: Joi.string()
      .regex(/^[0-9]{3,30}$/)
      .min(11)
      .max(11),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    confirm_password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
  };

  const result = Joi.validate(req.body, schema);

  if (result.error) {
    res.status(400).send(result.error);
    return;
  }

  async function createUser() {
    const user = new User({
      first_name: req.body.first_name,
      middle_name: req.body.middle_name,
      last_name: req.body.last_name,
      email: req.body.email,
      mobile_number: req.body.mobile_number,
      password: req.body.password
    });

    const result = await user.save();
    console.log(result);
    res.send(result);
  }

  createUser();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));