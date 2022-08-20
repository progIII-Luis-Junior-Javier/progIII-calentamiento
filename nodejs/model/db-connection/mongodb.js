// package


const mongoose = require("mongoose");

const config = require("config");
const mongodbInfo = config.get("db-connections.mongodb");



const connectStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.pasword}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(connectStr);

    mongoose.connection.on("connected", () => {
        console.log("mongodb serverd connected");
    });

    mongoose.connection.on("disconnected", () => {
        console.log("mongodb serverd disconnected");
    });

    mongoose.connection.on("error", () => {
        console.log("mongodb serverd connection error");
    });

    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(() => {
        console.log("mongodb serverd shutting down");
         });
    });
}