const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  const noperms = new Discord.MessageEmbed()
  .setDescription("You don't have permission to excute this command")
  .setColor("RANDOM")
  if(!message.member.permissions.has("MANAGE_SERVER")) return message.reply({embeds: [noperms]})
  let member = message.mentions.members.first();
  let role = message.mentions.roles.first();
  const nomem = new Discord.MessageEmbed()
  .setDescription("I couldn't find that member")
  .setColor("RANDOM")
  const norole = new Discord.MessageEmbed()
  .setDescription("Please mention a role")
  if(!member) return message.reply({embeds: [nomem]})
  if(!role) return message.reply({embeds: [norole]})
  const embed = new Discord.MessageEmbed()
  .setDescription(":disappointed: Please don't add any role to me!")
  .setColor("RANDOM")
  const embed1 = new Discord.MessageEmbed()
  .setDescription("I can't add role to your account")
  .setColor("RANDOM")
    if(member.id === client.user.id) return message.reply({embeds: [embed]})
      if(member.id === message.author.id) return message.reply({embeds: [embed1]})
  const again = new Discord.MessageEmbed()
.setDescription(`${role} has admin permission i can't add that role to ${member}`)
        if(role.permissions.has["ADMINISTRATOR", "BAN_MEMBERS", "KICK_MEMBERS"]) return message.reply({embeds: [again]})
  const embed4 = new Discord.MessageEmbed()
  .setDescription(`${member} already have the role named: ${role}`)
          if(member.roles.cache.has (role.id)) return message.reply({embeds: [embed4]})
  else {
      member.roles.add(role)
    .then(() =>{
      const embed3 = new Discord.MessageEmbed()
      .setDescription(`Successfully added ${role} role to ${member}`)
    message.reply({embeds: [embed3]})
      const embed4 = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} added ${role} to your account in server ${message.guild.name}`)
      member.send({embeds: [embed4]})
    });
  };
};
module.exports.name = "add-role"
//done