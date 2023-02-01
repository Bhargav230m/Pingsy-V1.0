const mongoose = require("mongoose")

const UserBlacklist = new mongoose.Schema({
  ID: String,
  Username: String,
})
const Mod = module.exports = mongoose.model('UserBlacklist', UserBlacklist)