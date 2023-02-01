const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  const noperms = new Discord.MessageEmbed()
  .setDescription("**You need send messages permission in this server!**")
  if(!message.member.permissions.has("SEND_MESSAGES")) return message.reply({embeds: [noperms]})
const nomem = new Discord.MessageEmbed()
  .setDescription("Please mention a member!")
  let member = message.mentions.members.first()
  if(!member) return message.reply({embeds: [nomem]})
  let message2 = message.content.split(" ").slice(2).join(" ")
  const nomsg = new Discord.MessageEmbed()
  .setDescription("Please provide a message to send!")
  if(!message2) return message.reply({embeds: [nomsg]})
  const embed = new Discord.MessageEmbed()
  .setDescription("You can't send me a message\n XD!")
  if(member.id === client.user.id) return message.reply({embeds: [embed]})
  const membersend = new Discord.MessageEmbed()
  .setDescription("I can't send a message to you")
  if(member.id === message.author.id) return message.reply({embeds: [membersend]})
  else {
    const sended = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} sent you a message from server ${message.guild.name}`)
    .setDescription(`:email: Message: ${message2}`)
    member.send({embeds: [sended]}) 
    const embed23 = new Discord.MessageEmbed()
    .setDescription(`Succesfully Sent ${member} a message`)
    message.channel.send({embeds: [embed23]})
  };
  message.delete();
};
module.exports.name = "dm"
module.exports.description = "Sends a private message to the user"