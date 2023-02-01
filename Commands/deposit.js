const { MessageEmbed } = require("discord.js")
const profileModel = require("../models/profileSchema")
module.exports.run = async (client, message, args, profileData) => {
  const amount = args[0];
  if( amount % 1 != 0 || amount <= 0) return message.reply("Don't try to fool me\nThe number should be a whole number");
  try {
    if(amount > profileData.coins) return message.reply("You don't have that amount of Money to deposit")
  await profileModel.findOneAndUpdate(
    {
    userID: message.author.id,
  }, 
 {
    $inc: {
    coins: -amount,
      bank: amount,
  }
  }
 );
  }catch (err) {
    console.log(err)
  }
  return message.reply(`Successfully deposited ${amount} to your bank`)
}
module.exports.name = "deposit"