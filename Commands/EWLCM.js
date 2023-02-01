const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  const noperms = new Discord.MessageEmbed()
  .setTitle("Missing Permissions")
  .setDescription("You dont have permission to excute this command")
if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply({embeds: [noperms]})

       await message.guild.channels.create

            ('🌻 Welcome', {
                type : 'text'
               });                
    const succesful = new Discord.MessageEmbed()
  .setTitle(`**Enabled WELCOME**`)   
  .setDescription("*Hello scrubs\n You have used a command named **EWLCM** in your server and WELCOME is enbaled.\nIf you think this is a mistake please run **>DWLCM** in your server to disable WELCOME in your server!*")
  .setFooter("*Your sincerely\nPingsy V1.0#1904*")
  .setColor("RANDOM")
  message.author.send({embeds:[succesful]})
  };
module.exports.name = "EWLCM"