//packages
const mongoose = require("mongoose");
//creación de schema
const cardSchema = new mongoose.Schema({
    cardNumber:{
        type: "String",
        required: true
    },
    typeCard:{
        type: "String",
        required: true
    },
    playCost: {
        type: "Number",
        required: true,
        min: 0,
        max: 20
    },
    colorCard: {
        type: "String",
        required: true
    },
    levelCard: {
        type: "Number",
        required: true,
        min: 2,
        max: 7
    },
    power:{
        type: "Number",
        min: 1000,
        max: 16000
    },
    attribute:{
        type: "String",
        required: true
    },
    stageLevel:{
        type: "String",
    },
    rarity:{
        type: "String"
    },
    cardName:{
        type: "String",
        require: true
    }

});

module.exports = cardSchema