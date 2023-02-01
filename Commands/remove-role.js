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
  .setDescription(":disappointed: Please don't remove any role from me!")
  .setColor("RANDOM")
  const embed1 = new Discord.MessageEmbed()
  .setDescription(":disappointed: Who the hell removes roles from their account\n its free role take it!")
  .setColor("RANDOM")
    if(member.id === client.user.id) return message.reply({embeds: [embed]})
      if(member.id === message.author.id) return message.reply({embeds: [embed1]})
  const again = new Discord.MessageEmbed()
.setDescription(`${role} has admin permission i can't remove that role from ${member}`)
        if(role.permissions.has["ADMINISTRATOR", "BAN_MEMBERS", "KICK_MEMBERS"]) return message.reply({embeds: [again]})
          const embed4 = new Discord.MessageEmbed()
  .setDescription(`${member} don't have the role named: ${role}`)
          if(!member.roles.cache.has (role.id)) return message.reply({embeds: [embed4]})
  else {
      member.roles.remove(role)
    .then(() =>{
      const embed3 = new Discord.MessageEmbed()
      .setDescription(`Successfully removed ${role} role from ${member}`)
    message.reply({embeds: [embed3]})
      const embed4 = new Discord.MessageEmbed()
      .setDescription(`${message.author.username} removed ${role} from your account in server ${message.guild.name}`)
      member.send({embeds: [embed4]})
    });
  };
};
module.exports.name = "remove-role"
//done