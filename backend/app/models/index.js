const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
IP = process.env.MYSQL_HOST_IP;

const db = {};
db.mongoose = mongoose;
db.url = "mongodb://mongoadmin:bdung@" + IP + ":27017/skills?authSource=admin";
db.hardSkills = require("./skill.model.js")(mongoose);

module.exports = db;
