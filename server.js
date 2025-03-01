// Server.js

// Imports //
const express = require("express");
const passport = require("passport");
const User = require("./models.js");
const localStrategy = require("./passp.js");
const controllers = require("./controllers.js");
const cookieParser = require("cookie-parser");
const connectDB = require("./db");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const routes = require("./pages.js");
const session = require("express-session");

// Main Server //
const app = express();
connectDB();
app.use(
    session({
        secret: "GFGLogin346",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");

// Serialize and deserialize user objects to maintain user sessions
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
});
// Use the routes
app.use("/api/", controllers); // Path to your authentication routes file
app.use("/", routes);

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));