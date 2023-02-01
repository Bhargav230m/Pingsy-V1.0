const { MessageEmbed } = require("discord.js")
const profileModel = require("../models/profileSchema")
module.exports.run = async (client, message, args, profileData) => {
  const RandomNumber = Math.floor(Math.random() * 5000) + 1;
  const response = await profileModel.findOneAndUpdate(
    {
    userID: message.author.id,
  }, 
 {
    $inc: {
    coins: RandomNumber,
  }
  }
 );
  message.reply(`You earned $${RandomNumber}!`)
}
module.exports.name = "beg"