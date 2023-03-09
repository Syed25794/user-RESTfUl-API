const { Router } = require("express");
const { createUser } = require("../controllers/user.controllers");
const validateUser = require("../middlewares/validateUser");

const userRoutes = Router();

userRoutes.post("/create",validateUser,createUser);

module.exports = userRoutes;