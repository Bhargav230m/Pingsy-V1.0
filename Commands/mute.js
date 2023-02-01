const Discord = require("discord.js")
const ms = require("ms");
module.exports.run = async (client, message, args) => {
  let noperms = new Discord.MessageEmbed()
  .setTitle("Missing Permissions!")
  .setDescription("You are missing permissions!")
  let menmem = new Discord.MessageEmbed()
  .setTitle("Do you know?")
  .setDescription("You forgot to mention a member")
  let botmute = new Discord.MessageEmbed()
  .setTitle("Did you know?")
  .setDescription("You cant mute me man! so sadge!")
  let memmute = new Discord.MessageEmbed()
  .setTitle("Do you know?")
  .setDescription("**You can't mute yourself**")
  let rolee = new Discord.MessageEmbed()
  .setTitle("Role not found")
  .setDescription("Please create a role named muted")
if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply({embeds: [noperms]});
   let role = message.guild.roles.cache.find(role => role.name === "muted")
    if(!role) return message.channel.send({embeds: [rolee]})
  let member = message.mentions.members.first()
  let reason = message.content.split(" ").slice(2).join(" ")
  if(!member) return message.reply({embeds: [menmem]});
  if(!reason) reason = "No reason was specified"
  if(member.id === client.user.id) return message.reply({embeds: [botmute]})
  if(member.id === message.author.id) return message.reply({embeds: [memmute]})
  const remute = new Discord.MessageEmbed()
  .setDescription("**he/she is already muted**")
    if(member.roles.cache.has (role.id)) return message.reply({embeds: [remute]})
  else {
    let admin = new Discord.MessageEmbed()
    .setTitle(`Failed`)
    .setDescription(`${member} is a mod/admin i can't mute him`)
    if(member.permissions.has("KICK_MEMBERS")) return message.reply({embeds: [admin]})
   member.roles.add(role)
    
     let channelsend = new Discord.MessageEmbed()
    .setTitle(`Muted`)
    .setDescription(`Succesfully muted ${member} with reason: ${reason}`)

  let mutereports = new Discord.MessageEmbed()
    .setTitle(`Mute Report`)
    .setDescription(`You have muted ${member} from your server: ${message.guild.name} with reason: ${reason}`)
    
         let membersend = new Discord.MessageEmbed()
    .setTitle(`Muted`)
    .setDescription(`You have been muted from server: ${message.guild.name} with reason: ${reason}`)
      message.reply({embeds: [channelsend]})
      message.author.send({embeds: [mutereports]})
      member.send({embeds: [membersend]})
      .catch((err) => {
      console.log(err)
    });
  };
};
module.exports.name = "mute"