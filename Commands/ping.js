const Discord = require("discord.js")

 module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setDescription(`Pong - ${client.ws.ping}ms`)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.username}`)
  message.reply({embeds:[embed]})
}
module.exports.name  = "ping"