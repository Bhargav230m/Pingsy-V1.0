const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  const noperms = new Discord.MessageEmbed()
  .setTitle("Missing Permissions!")
  .setDescription(":x:**You don't have permissions to excute this command!**")
  if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply({embeds: [noperms]});
    let args1 = message.content.split(" ").slice(1)
  const noid = new Discord.MessageEmbed()
  .setTitle("Put ID")
  .setDescription("**Please put an ID of a bot/member**")
if(!args1[0]) return message.reply({embeds: [noid]})
  const embeds = new Discord.MessageEmbed()
.setTitle("Unknown!")
  .setDescription("**Please mention the actual id of the member/bot!**")
if(isNaN(args[0])) return message.reply({embeds: [embeds]})
  const embeds1 = new Discord.MessageEmbed()
  .setTitle("Failed!")
  .setDescription("Hello there\nYou can't unban me cuz i am already unbanned")
  if(args1 === client.user.id) return message.reply({embeds: [embeds1]})
  const embeds2 = new Discord.MessageEmbed()
  .setTitle("Failed!")
.setDescription("Hello there\nYou can't unban yourself cuz you are already unbanned")
if(args1 === message.author.id) return message.reply({embeds: [embeds2]})
  else {
message.guild.members.unban(args[0]);
    const embeds3 = new Discord.MessageEmbed()
    .setDescription(`Succesfully unbanned ${args1} from your server`)
    message.reply({embeds: [embeds3]})
  };
};
module.exports.name = "unban"