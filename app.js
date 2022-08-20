// package

const express = require("express");
const config = require("config");

// configuracion app
const app = express();
const port = config.get("server-port");



app.listen(port, () =>{
    console.log("server is running...")
});