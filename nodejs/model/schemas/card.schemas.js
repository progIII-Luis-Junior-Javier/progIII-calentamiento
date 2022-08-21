//packages
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
//creación de schema
const cardSchema = new mongoose.Schema({
    cardNumber:{
        type: "String",
        required: true,
        unique: true
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
//exportación del schema
cardSchema.plugin(validator);
module.exports = cardSchema;