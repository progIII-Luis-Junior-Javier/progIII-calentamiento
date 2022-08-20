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
    
    cardDto.getAll({}, err, data => {
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

exports.getByFilter = (req, res, next) => {
    
    cardDto.getByFilter({code: req.params.code}, err, data => {
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

