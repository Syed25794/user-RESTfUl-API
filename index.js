const express = require("express");
const connection = require("./config/database");

const application = express();

application.use(express.json());

application.listen(8080,async()=>{
    try {
        console.log("Server is running on the localhost port : 8080 ");
        console.log("Database connnected successfully.");
        await connection();
    } catch (error) {
        console.log("Something went wrong in connection with database!");
    }
    
});