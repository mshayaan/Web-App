const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
  User
} = require("../models/user");

router.delete("/:userEmail", async (req, res) => {

  //Find user, if not found then return 404
  const user = User.findOne({
    email: req.params.userEmail
  });


  if (!user)
    return res.status(404)
      .send("The user with the given email was not found");

  //Delete
  const deletedUser = await deleteUser(req.params.userEmail);


  // const {
  //   first_name,
  //   last_name,
  //   email
  // } = deletedUser;

  res.send(deletedUser);
});

async function deleteUser(Useremail) {

  const user = await User.deleteOne({
    email: Useremail
  });

  return user;
}

module.exports = router;