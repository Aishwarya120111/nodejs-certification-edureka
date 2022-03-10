const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./config/mongodb");
const path = require("path");
const chatserver = require("./router/chat");

const commonrouter = require("./router/common");

const server = express();

server.set("view engine", "ejs");
server.set("views",
    [path.join(__dirname, "./views/")]);

mongodb.connect();


server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use("/common/", commonrouter);

server.listen(4000);
server.get("/", (req, res) => {
    res.render('home');
    // res.sendFile(path.join(__dirname,"./src/shared/views/home.html"));
})

console.log("Server listening at 4000");