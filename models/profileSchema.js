const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  coins: { type: Number, default: 10000},
  bank: { type: Number, default: 500 },
  Username: { type: String, require: true }
});

const model = mongoose.model('ProfileModels', profileSchema);
module.exports = model;
