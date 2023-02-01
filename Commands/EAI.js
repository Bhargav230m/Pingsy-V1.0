const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply("You don't have `MANGE_CHANNELS` permission in this server!");
await message.guild.channels.create

            ('chatbot', {
                type : 'text'
               });      
}
module.exports.name = "EAI"