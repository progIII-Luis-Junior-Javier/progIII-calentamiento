// package

const express = require("express");
const config = require("config");
const bodyParser = require("body-parser")
// configuracion app
const app = express();
const port = config.get("server-port");
const jsonparser =bodyParser.json()
const urlEcodedParser = bodyParser.urlencoded({extended: true});
const controller = require("./controller/logic/card.controller");

app.use(jsonparser);
app.use(urlEcodedParser)

// Metodos
app.get("/", (req, res, next) =>{
    res.send("Bienvenidos a la card rest api");
});

app.get("/card", (req, res, next) =>{
    controller.getAll(req, res, next);
});


app.post("/card", (req, res, next) =>{
    controller.createCard(req, res, next);
});

app.listen(port, () =>{
    console.log("server is running...")
});