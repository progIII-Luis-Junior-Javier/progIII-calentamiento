//packages

const mongoose = require("mongoose");
const db = require("../db-connection/mongodb");

 
/** using schema */
const schema = require("../schemas/card.schemas")
db();
schema.statics = {
    create: function(data, cb){
        let doc = new this(data);
        doc.save(cb);
    },

    getAll: function(query, cb){
       this.find(query, cb); 
    },

    getByFiltercardNumber: function(query, cb){
        this.findOne(query, cb); 
     },
     getByFilterTypecard: function(query, cb){
        this.find(query, cb); 
     },
    update: function(query,data,cb){
        this.finOneAndUpdate(query, {$set: data},{new:true}, cb);
    },
    delete: function(query,cb){
        this.findOneAndDelete(query);
    }
}

const dto = mongoose.model("coll_card", schema);
module.exports = dto;