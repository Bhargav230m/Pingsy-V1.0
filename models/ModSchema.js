const mongoose = require("mongoose");

let ModSchema = new mongoose.Schema({
  GuildID: String,
  UserID: String,
  Punishments: Array,
  UserName: String,
  GuildName: String,
});

const Mod = module.exports = mongoose.model('Moderation', ModSchema)