const Discord = require("discord.js")
const { OwnerId } = require("./../config.json")
  module.exports.run = async (client, message, args) => {
    const dag = new Discord.MessageEmbed()
    .setTitle("__No permissions__")
    .setDescription("You are not my owner!")
    if(message.author.id != OwnerId) return message.reply({embeds: [dag]})
  let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    const d = new Discord.MessageEmbed()
      .setTitle(`__Uptime:__`)
    .setDescription(`${days}d ${hours}h ${minutes}m ${seconds}s`)
      .setFooter("Created by technology power and aidded")
    .setColor("RANDOM")
    return message.channel.send({embeds: [d]});
};
module.exports.name = "warn"