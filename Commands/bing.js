const Discord = require("discord.js") 
module.exports.run = async (client, message, args) => {
  const bing = new Discord.MessageEmbed()
    .setTitle("Bong")
  .setDescription(`*Bing | ${client.ws.ping} ms*`)
  .setColor("RANDOM")
  message.reply({embeds: [bing]})
};
module.exports.name = "bing"