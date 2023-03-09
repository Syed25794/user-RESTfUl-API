const User = require("../models/user.models");

const createUser = async ( req, res )=>{
    const { firstName, lastName, email, password, level } = req.body;
    try {
        const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        level
        });
        newUser.save();
        res.status(201).send({message:"User created successfully."});
    } catch (error) {
        res.status(400).send({message:"Something went wrong in creating user!"});
    }
}





module.exports = { createUser };