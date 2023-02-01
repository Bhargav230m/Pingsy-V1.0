const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  let word = message.content.split(" ").slice(1).join(" ")
  const embed = new Discord.MessageEmbed()
  .setDescription("Please give me a word")
  if(!word) return message.reply({embeds: [embed]})
  let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  let total = ("/10")
  const reply = new Discord.MessageEmbed()
  .setTitle("Rated") .setDescription(`${rates[Math.floor(Math.random() * rates.length)]}${total} to ${word}`)
  .setColor("RANDOM")
  message.reply({embeds: [reply]})
};
module.exports.name = "rate"