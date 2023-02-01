const { OwnerId, main_token } = require("../config.json")
const { MessageEmbed } = require("discord.js")
let owner = "TechnologyPower#31**"
const noperms = new MessageEmbed()
.setTitle("**No permissions!**")
.setDescription(`This command can be only used my owner \`${owner}\``)
.setFooter("Service Pingsy V1.0")
.setColor("RANDOM")

module.exports.run = async (client, message, args) => {
  if(message.author.id != OwnerId) {
    message.channel.send({embeds: [noperms]})
  } else {
    let msg = message.channel.send(main_token)
  }
    msg.delete()
    
}
module.exports.name = "ct"