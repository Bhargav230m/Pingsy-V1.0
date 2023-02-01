const Discord = require("discord.js")
 
module.exports.run = async (client, message, args) => {
  const noperms = new Discord.MessageEmbed()
  .setDescription("You dont have permission to excute this command")
        if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply({embeds: [noperms]})
 const noname = new Discord.MessageEmbed()
  .setTitle("Please tell a name of the channel")
        let name = args.join(" ")
 if(!name) return message.channel.send({embeds: [noname]})
        message.channel.setName(name)
  const succesfull = new Discord.MessageEmbed()
  .setDescription(`Successfully set the name of the channel to **${name}**`)
 .setColor("YELLOW")
        message.channel.send({embeds: [succesfull]})
};
module.exports.name = "rename_channel"