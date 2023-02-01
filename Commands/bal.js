const { MessageEmbed } = require("discord.js")
const profileModel = require("../models/profileSchema")
module.exports.run = async (client, message, args, profileData) => {
  try {
  let profielData = await profileModel.findOne({ userID: message.author.id });
if(profileModel) {
const bal = new MessageEmbed()
  .setTitle(`**${message.author.username}'s** Balance'`) .setDescription(`**Coins:**${profileData.coins}\n**Bank:**${profileData.bank}`)
  .setFooter("I hope that your balance is just not like your IQ")
 .setColor("RANDOM")
  message.reply({embeds: [bal]})
    }
  }catch (err) {
    console.log(err)
  }
}
module.exports.name = "bal"