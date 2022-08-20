//package

const CryptoJS = requite("crupto-js");
const config = require("config");


// encrypt password

exports.EncryptPassword = (password) => {
    let secretKey = config.get("secretkeys").cryptojs;
    var encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
}