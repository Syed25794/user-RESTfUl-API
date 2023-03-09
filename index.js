const express = require("express");
const connection = require("./config/database");
const userRoutes = require("./routes/user.routes");
const dotenv = require("dotenv");
dotenv.config();

const { PORT } = process.env;

const application = express();

application.use(express.json());

application.use("/user",userRoutes);

application.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home Page.</h1>");
});

application.listen(PORT,async()=>{
    try {
        console.log(`Server is running on the localhost port  : ${PORT} `);
        await connection;
        console.log("Database connnected successfully.");
    } catch (error) {
        console.log("Something went wrong in connection with database!");
    }
});