const User = require("../models/user.models");
const bcrypt = require("bcrypt");

const createUser = async ( req, res )=>{
    const { firstName, lastName, email, password, level } = req.body;
    try {
        bcrypt.hash(password, 5, function(err, hashedPassword) {
            if( err ){
                res.status(502).send({"msg":"something went wrong in encrypting password. Please try again later to singup."});
            }else {
                const newUser = new User({
                    firstName,
                    lastName,
                    email,
                    password:hashedPassword,
                    level
                });
                newUser.save();
                res.status(201).send({message:"User created successfully."});
            }
        });
    } catch (error) {
        res.status(400).send({message:"Something went wrong in creating user!"});
    }
}





module.exports = { createUser };