const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  const noperms = new Discord.MessageEmbed()
  .setTitle("Missing Permissions")
  .setDescription("You dont have permission to excute this command")
if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply({embeds: [noperms]})

    const channel = message.guild.channels.cache.find(ch => ch.name === '🌻-welcome');
  const nochannel = new Discord.MessageEmbed()
  .setDescription(":x: *Welcome is already disabled!*")
  if(!channel) return message.reply({embeds: [nochannel]})
  channel.delete();       
    const succesful = new Discord.MessageEmbed()
  .setTitle(`**Disabled WELCOME**`)   
  .setDescription("*Hello scrubs\n You have used a command named **DWLCM** in your server and WELCOME is disabled.\nIf you think this is a mistake please run **>EWLCM** in your server to enable WELCOME in your server again!*")
  .setFooter("*Your sincerely\nPingsy V1.0#1904*")
  .setColor("RANDOM")
  message.author.send({embeds:[succesful]})
  };
module.exports.name = "DWLCM"