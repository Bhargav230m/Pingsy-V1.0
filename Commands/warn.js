const { MessageEmbed } = require("discord.js");
const DB = require("../models/ModSchema.js")

module.exports.run = async(client, message, args) => {
  //embed
    const e = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
  .setDescription("You forgot to mention a member!")
      .setFooter("Whoops!")
  .setColor("RANDOM")

const d = new MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
  .setDescription("I need an reason to warn that member!")
      .setFooter("Whoops!")
  .setColor("RANDOM")
//end
  let target = message.mentions.members.first()
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({embeds: [e]})

if(target === client.user.id) return message.channel.send("You can't warn me")
  if(target === message.author.id) return message.channel.send("You can't warn yourself")
  
  if(!target) return message.channel.send({
    embeds: [e]
  })
  
  let reason = message.content.split(" ").slice(2).join(" ")
if(!reason) return message.channel.send({
  embeds: [d]
})


    const c = new MessageEmbed()
 .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
  .setDescription(`Hey you can't warn a member who has higher or equal role than yours`)
      .setFooter("Whoops!")
  .setColor("RANDOM")
  
  if(!message.guild.me.permissions.has("MANAGE_MESSAGES")) return message.channel.send("Hey, I need Manage Messages permissions in this guild")


if(target.permissions.has("MANAGE_MESSAGES")) return message.reply({
  embeds: [c]
});
  
    const q = new MessageEmbed()
 .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
  .setDescription(`Warned ${target} for \`${reason}!\``)
      .setFooter("Whoops!")
  .setColor("RANDOM")
  //data work
  let data = await DB.findOne({
      GuildID: message.guild.id,
    UserID: target.id,
      UserName: target.username,
      GuildName: message.guild.name,
  });
  if(data) {
    data.Punishments.unshift({
      PunishType: 'Warn',
      Moderator: message.author.username,
      Reason: reason,
    });
    message.channel.send({
      embeds: [q]
    });
    data.save();
  } else if (!data) {
    let newData = new DB({
       GuildID: message.guild.id,
    UserID: target.id,
      UserName: target.username,
      GuildName: message.guild.name,
      Punishments: [{
        PunishType: 'Warn',
        Moderator: message.author.username,
        Reason: reason,
      }, ],
    });
    newData.save();
     message.channel.send({
       embeds: [q]
     });
  };
};
module.exports.name = "warn"