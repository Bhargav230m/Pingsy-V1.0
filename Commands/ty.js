const Discord = require("discord.js")
const Database = require("@replit/database")
const db = new Database()
module.exports.run = async (client, message, args) => {
  const nomem = new Discord.MessageEmbed()
  .setDescription("**Please mention an member**")
  const noty = new Discord.MessageEmbed()
  .setDescription("**Wrong usage\nDo >ty (member) (number-of-ty)**")
  let member = message.mentions.members.first()
  if(!member) return message.reply({embeds: [nomem]})
  let ty = message.content.split(" ").slice(2).join(" ")
  if(!ty) return message.reply({embeds: [noty]}) 
  
  let clienty = new Discord.MessageEmbed()
  .setDescription("I am sorry but i can't accept your thank-you")
    if(member.id === client.user.id) return message.reply({embeds: [clienty]})
  let memberty = new Discord.MessageEmbed()
  .setDescription("You can't thank your self")
      if(member.id === message.author.id) return message.reply({embeds: [memberty]})
  else {
      const thankyou = new Discord.MessageEmbed()
    .setDescription(`You thanked ${member}\nTotal number of thank you's: ${ty}`)
    const thanked = new Discord.MessageEmbed()
    .setTitle("You have been thanked :smile:")
    .setDescription(`You have been thanked by ${message.author.username} in server: ${message.guild.name}\nTotal number of thank you's:${ty}`)
    message.reply({embeds: [thankyou]})
    member.send({embeds: [thanked]})
  };
};
module.exports.name = "ty"