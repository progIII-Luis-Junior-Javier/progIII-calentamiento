// package

const express = require("express");
const config = require("config");

// configuracion app
const app = express();
const port = config.get("server-port");

// Metodos
app.get("/", (req, res, next) =>{
    res.send("Bienvenidos a la card rest api");
});

const controller = require("./controller/logic/card.controller");

app.get("/card", (req, res, next) =>{
    controller.getAll(req, res, next);
});

app.listen(port, () =>{
    console.log("server is running...")
});