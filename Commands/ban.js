 const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
  //embeds + math.random (variable)
  let err1 = ["You don't have permissions to execute this command", "Oh no! Looks like you don't have permissions", "Oh Shit! Looks like GOD_vedant hacked your permissions", "Please Get some perms"]
  let err2 = ["Whoops, looks like you forgot to mention a member", "Please mention a member", "WAIT, GOD_vedant told me that you didn't mention a member"]
  let err3 = ["Oh shit! GOD_vedant gave the mentioned member MOD/ADMIN permissions", "The mentioned member is a MOD/ADMIN", "She/He is a MOD/ADMIN", "You try to do some hacking and got ban member permissions in the guild, but forgot that the mentioned member is also a MOD/ADMIN"]
  //embed1
  const a = new MessageEmbed()
  .setTitle("Error!")
    .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setDescription(`${err1[Math.floor(Math.random() * err1.length)]}`)
.setFooter("Hmm")
  .setColor("RANDOM")
  //embed2
  const b = new MessageEmbed()
  .setTitle("Error!")
 .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`${err2[Math.floor(Math.random() * err2.length)]}`)
  .setFooter("GOD_vedant sucks!")
  .setColor("RANDOM")
  //embed3
  const c = new MessageEmbed()
  .setTitle("Error!")
  .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`${err3[Math.floor(Math.random() * err3.length)]}`)
  .setFooter("Crackpixel more like gaypixel")
  .setColor("RANDOM")
  //Permissions Manager
if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({embeds: [a]})
  //Defining
  let reason = message.content.split(" ").slice(2).join(" ")
  if(!reason) reason = "No reason was specified"
  let target = message.mentions.members.first()
  if(!target) return message.channel.send({embeds: [b]})
  if(target.id === message.author.id) return;
  if(target.id === client.user.id) return;
  if(target.permissions.has("BAN_MEMBERS")) return message.channel.send({embeds: [c]})
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("I don't have permissions to ban to ban that user/bot")
    //Target ban
  else {
    //embed4
  const d = new MessageEmbed()
  .setTitle("Successfull")
  .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`Banned ${target} with reason: ${reason}`)
  .setFooter("Oxide771 is a sucker")
    .setColor("RANDOM")
    let msg = await message.reply({embeds: [d]})
    //target is banned
  target.ban().then(async (mem) => {
    //prepairing a embed to send a message to the mentioned member
    const e = new MessageEmbed()
    .setTitle("Banned")
  .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
    .setDescription(`You are banned from ${message.guild.name} with reason: ${reason} by ${message.author.username}`)
    .setColor("RANDOM")
    target.send({embeds: [e], content: "OH NO"})
  })
  };
  };
module.exports.name = "ban"