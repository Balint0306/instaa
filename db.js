// db.js
const mongoose = require("mongoose");

// Mongoose Connection
const connectDB = async () => {
    mongoose
        .connect("mongodb://bayt:vCF5MEbp9TGJrYuDPmJ7c@37.221.211.55:5000/bayt", {
            // My works on 127.0.0.1 you can also use localhost
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.error("Error connecting to MongoDB:", err));
};

module.exports = connectDB;