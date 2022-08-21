const controller = require("./controller/logic/card.controller");

exports.cardRoutes = (app) =>{
    app.get("/card", (req, res, next) =>{
        controller.getAll(req, res, next);
    });

    
    app.post("/card", (req, res, next) =>{
        controller.createCard(req, res, next);
    });
};

