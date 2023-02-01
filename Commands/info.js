const MessageEmbed = require("discord.js")
const Discord = require("discord.js")
module.exports.run = (message, client, args) => {
  const info = MessageEmbed()
  .setTitle("***Pingsy Info***")
  .setDescription("Hello its me Pingsy, I am created by Technology-Power.Aiddenn was also a part of this project, but i kicked him because he was not doing anything.Pls run >CA to create your account.This project was started on 17 Feburary. `BOT VERSION V1.0`, `ACCOUNT CREATING SYSTEM V.2.0`, `COMMAND HANDLER V4`, `EVENT HANDLER V2`, `CHATBOT V3.0`, `SERVICE VERSION V1.0`")
  .setFooter("Updated on Friday 23 September, 1:22PM IST")
  .setColor("RANDOM")
//Message reply system
  message.channel.send({embeds: [info], message: "My info:"})
}
module.exports.name = "info"