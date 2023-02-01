const Discord = require("discord.js")
module.exports.run = (client, message, args) =>{ 
if(!message.member.permissions.has('MANAGE_CHANNELS')) {
 const lockchannelError = new Discord.MessageEmbed()
 .setDescription("You don't have permission to unlock channels!")
 .setColor("RANDOM")

message.channel.send({embeds :[lockchannelError]});
 }

 let channel = message.mentions.channels.first();
 let reason = args.join(" ") || 'Not Specified'

 if(channel) {
 reason = args.join(" ").slice(22) || 'Not Specified'
 } else (
 channel = message.channel
 )

 if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true) {
 const lockchannelError2 = new Discord.MessageEmbed()
 .setDescription(`${channel} is already unlocked!`)
 .setColor("RANDOM")

 message.channel.send({embeds :[lockchannelError2]});
 }

 channel.permissionOverwrites.create
(message.guild.id, { SEND_MESSAGES: true })

const embed = new Discord.MessageEmbed()
 .setTitle(`Channel Unlocked!`)
 .setDescription(`**Channel:** ${channel} \n **Reason:** ${reason}`)
 .setColor("RANDOM")

 message.channel.send({embeds: [embed]})
  const embed2 = new Discord.MessageEmbed()
  .setDescription(`Succesfully unlocked the ${channel} with reason: ${reason}`)
  message.author.send({embeds: [embed2]})
}
exports.name = "lock"