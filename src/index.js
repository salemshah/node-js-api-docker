const express = require('express');
const mongoose = require("mongoose");

const hostname = "127.0.0.1";
const port = 3000

const server = express();

server.use(express.json());

mongoose.connect("mongodb://mongo/mydb");


server.use("/api/", require("./api/routes/postRoute"))

server.listen(port, hostname, () => {
    console.log(`Node js API app listening on port ${port}`)
})