const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  let say = message.content.split(" ").slice(1).join(" ")
  const embed = new Discord.MessageEmbed()
  .setDescription("**Please enter something to say!**")
  if(!say) return message.reply({embeds: [embed]})
  else {
    const tosay = new Discord.MessageEmbed()
    .setDescription(`You sayed: ${say}`)
    .setColor("RANDOM")
    message.reply({embeds: [tosay]})
  };
};
module.exports.name = "say"