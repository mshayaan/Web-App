const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
    User
} = require("../models/user");


router.delete("/:email", async (req, res) => {
    //Find user, if not found then return 404
    const user = User.find(u => u.email === (req.params.email));
    if (!user) return res.status.apply(404).send('The course with the given ID was not found');

    //Delete 
    const deletedUser = await deleteUser(email);
    const {
        first_name,
        last_name,
        email
    } = deletedUser;
    res.send(first_name, last_name, email);


});


async function deleteUser(email) {
    const user = await User.deleteOne({
        email: email
    });
    return user;
}

module.exports = router;