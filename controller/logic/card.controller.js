/** Dto */

const cardDto = require("../../nodejs/model/dto/card.dto");


exports.createCard = (req, res, next) => {
    let card = {
        cardNumber: req.body.cardNumber,
        typeCard: req.body.typeCard,
        playCost: req.body.playCost,
        colorCard: req.body.colorCard,
        levelCard: req.body.levelCard,
        power: req.body.power,
        attribute: req.body.attribute,
        stageLevel: req.body.stageLevel,
        rarity: req.body.rarity,
        cardName: req.body.cardName
    };

    cardDto.create(card, (err, data) => {
        if(err){
            return res.status(400).json(  
                {
                    error: err
                }
            );
        };
        res.status(201).json({
            info: data
        });
    });

};

exports.getAll = (req, res, next) => {
    
    cardDto.getAll({}, (err, data) => {
    if(err){
        return res.status(400).json(  
            {
                error: err
            }
        );
    };
    res.status(200).json(
        {
        info: data
        });
});
};

exports.getByFiltercardNumber = (req, res, next) => {
    cardDto.getByFiltercardNumber({cardNumber: req.params.cardNumber}, (err, data) => {
    if(err){
        return res.status(400).json(  
            {
                error: err
            }
        );
    };
    res.status(200).json(
        {
        info: data
        });
});
};

exports.getByFilterTypecard = (req, res, next) => {
    cardDto.getByFilterTypecard({typeCard: req.params.typeCard}, (err, data) => {
    if(err){
        return res.status(400).json(  
            {
                error: err
            }
        );
    };
    res.status(200).json(
        {
        info: data
        });
});
};

