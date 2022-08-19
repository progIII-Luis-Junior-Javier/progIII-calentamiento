/** Dto */

const cardDto = require("../../model/dto/card.dto")

exports.createCard = (req, res, next) => {
    let card = {
        name: req.body.name,
        power: req.body.power,
        type: req.body.type,
        effects: req.body.name
    }

    cardDto.save(card, (err, data) => {
        if(err){
            return res.status(400).json(  
                {
                    error: err
                }
            )
        }
        res.status(201).json({
            info: data
        })
    })
}