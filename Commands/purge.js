const Discord = require('discord.js')
module.exports.run = (client, message, args) =>{
{
let arg = message.content.split(" ")
if(message.member.permissions.has("MANAGE_MESSAGES")) {
let clear = arg[01]
  const embed1 = new Discord.MessageEmbed()
  .setDescription(`Incorrect usage of command you need to provide an amount of messages to Clear.
Example: >purge 50`)
if(!clear) return message.channel.send({embeds: [embed1]})
  const embed2 = new Discord.MessageEmbed()
  .setDescription("Please Put a Valid Number to Clear messages.")
if(isNaN(clear)) return message.channel.send({embeds: [embed2]})
  const embed3 = new Discord.MessageEmbed()
  .setDescription("I can't Clear more than 100 messages.")
if(clear > 1000) return message.channel.send({embeds: [embed3]})
  const embed4 = new Discord.MessageEmbed()
  .setDescription("You cannot Clear less than 1 message.")
if(clear < 1) return message.channel.send()
message.channel.bulkDelete(clear)
.then(message => 
 message.delete({timeout: 30000})
 )
}else{
  const noperms = new Discord.MessageEmbed()
  .setDescription("You dont have permissions!")
 
message.reply({embeds: [noperms]})
} 
};
}

exports.name = "purge"