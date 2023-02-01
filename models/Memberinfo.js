const mongoose = require("mongoose");

const Memberinfo = new mongoose.Schema({
  UserID: { type: String, require: true } ,
  Username: { type: String, require: true },
  Guildname: { type: String, require: true, unique: true },
});
const model = mongoose.model('Memberinfo', Memberinfo);
module.exports = model;