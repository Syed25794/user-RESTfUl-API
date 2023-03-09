const express = require("express");
const connection = require("./config/database");
require("dotenv").config();

const { PORT } = process.env;

const application = express();

application.use(express.json());

application.listen(PORT,async()=>{
    try {
        console.log(`Server is running on the localhost port  : ${PORT} `);
        await connection();
        console.log("Database connnected successfully.");
    } catch (error) {
        console.log("Something went wrong in connection with database!");
    }
});