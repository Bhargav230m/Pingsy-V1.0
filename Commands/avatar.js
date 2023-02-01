const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
  const d = new MessageEmbed()
  .setDescription(`*${message.author.username}'s* **Avatar**`)
  .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024}))
  .setColor("RANDOM");
  message.reply({embeds: [d]})
};
module.exports.name = "avatar"