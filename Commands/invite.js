const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
  const invitembed = new Discord.MessageEmbed()
  .setTitle(`Invite Pingsy Bot!`)   
  .setDescription(`[Invite Bot](https://discord.com/api/oauth2/authorize?client_id=961196704948969482&permissions=1120184659063&scope=bot%20applications.commands) or [Support Website](https://sites.google.com/view/technology-power-games/home)`)
  .setFooter("My prefix is >")
  .setColor("RANDOM")
  message.reply({embeds:[invitembed]})
}
module.exports.name = "invite"