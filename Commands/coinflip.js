const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  let flips = ["Heads", "Tails", "Center", "Coin-Destroyed"]
  const flips2 = new Discord.MessageEmbed()
  .setTitle("Coin is:")
  .setDescription(`**${flips[Math.floor(Math.random() * flips.length)]}**`)
  .setFooter("Created by technology power and aidden")
  message.reply({embeds: [flips2]})
};
module.exports.name = "coinflip"
module.exports.description = "Flips a coin"