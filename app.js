// package

const express = require("express");
const config = require("config");
const bodyParser = require("body-parser")
const cors = require('cors')

// configuracion app
const app = express();
const port = config.get("server-port");
const jsonparser =bodyParser.json()
const urlEcodedParser = bodyParser.urlencoded({extended: true});
const controller = require("./controller/logic/card.controller");
const ipFn = require("./middleware/grtIpaddress")

app.use("*",ipFn)
app.use(cors())
app.use(jsonparser);
app.use(urlEcodedParser)

// Metodos
app.get("/", (req, res, next) =>{
    res.send("Bienvenidos a la card rest api");
});

app.get("/card", (req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    controller.getAll(req, res, next);
});

app.get("/card/bycardNumber/:cardNumber", (req, res, next) =>{
    console.log("Obteniendo carta por numero...")
    res.setHeader('Access-Control-Allow-Origin', '*')
    controller.getByFiltercardNumber(req, res, next);
});

app.get("/card/bytypeCard/:typeCard", (req, res, next) =>{
    console.log("Obteniendo cartas por typo...")
    res.setHeader('Access-Control-Allow-Origin', '*')
    controller.getByFilterTypecard(req, res, next);
});



app.post("/card", (req, res, next) =>{
   // res.setHeader('Access-Control-Allow-Origin', '*')
   controller.createCard(req, res, next);
   
   console.log('entrando al post')
});

app.listen(port, () =>{
    console.log("server is running...")
});