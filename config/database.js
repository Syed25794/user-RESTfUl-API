const mongoose = require("mongoose");
const MONGODB_URL = "mongodb+srv://syed25794:Kn0SOKSeihbPrkAH@cluster0.nod9dt0.mongodb.net/?retryWrites=true&w=majority";
const connection = mongoose.connect(MONGODB_URL);
module.exports = connection ;