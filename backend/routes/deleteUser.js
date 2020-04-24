const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
    User
} = require("../models/user");


router.delete('/:myemail', async (req, res) => {
    console.log("In the delete API 1");
    //Find user, if not found then return 404
    const user = User.find(u => u.email === (req.params.myemail));
    // console.log(user);
    console.log("In the delete API 2");
    if (!user) return res.status.apply(404).send('The user with the given ID was not found');
    console.log("In the delete API 3");
    //Delete 
    const deletedUser = await deleteUser(req.params.myemail);
    console.log("In the delete API 6");
    const {
        first_name,
        last_name,
        email
    } = deletedUser;
    console.log("In the delete API 7");
    res.send(first_name, last_name, email);


});


async function deleteUser(Useremail) {
    console.log("In the deleteUser function 4");
    const user = await User.deleteOne({
        email: Useremail
    });
    console.log("In the deleteUser function 5");
    return user;
}

module.exports = router;