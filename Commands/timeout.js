const Discord = require("discord.js")
module.exports.run = (client, message, args) => {
const noperms = new Discord.MessageEmbed()
  .setDescription("You don't have permissions to excute this command")
  if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply({embeds: [noperms]})
  let member = message.mentions.members.first()
  let reason = message.content.split(" ").slice(2).join(" ")
  const nomem = new Discord.MessageEmbed()
  .setDescription("Please mention a member")
  if(!member) message.reply({embeds: [nomem]})
  if(!reason) reason = "No reason was specified"
  else {
    const memberop = new Discord.MessageEmbed()
    .setDescription(`I can't timeout ${member} as he is a mod/admin`)
if(member.permissions.has("BAN_MEMBERS")) return message.reply({embeds: [memberop]})
member.timeout(40 * 5 * 60 * 1000, reason);
  const timoutreports = new Discord.MessageEmbed()
    .setDescription(`Successfully timedout ${member} in your server named: ${message.guild.name} with reason: ${reason}`)
    message.author.send({embeds: [timoutreports]})
    const embed = new Discord.MessageEmbed()
    .setDescription(`You have been timedout in server named: ${message.guild.name} with reason: ${reason}`)
     const embed1 = new Discord.MessageEmbed()
    .setDescription(`Succesfully timedout ${member} with reason: ${reason} for 3-hrs`)
    member.send({embeds: [embed]})
    message.channel.send({embeds: [embed1]});
};
};

module.exports.name = "timeout"