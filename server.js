const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = process.env.APP_PORT;

const server = express();

const pleasework = "stupid git";

server.use(
    cors({
        origin: "http://localhost:3000",
    })
);

server.use(express.json())

server.get("/", (req, res) => {
    res.send("Welcome to the Nimbus Note projects server");
})

server.listen(port, (err) => {
    if (err) {
        console.error("Something bad happened", err);
    } else {
        console.log("Server is listening on port ", port)
    }
})