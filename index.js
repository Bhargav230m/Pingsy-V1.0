//defining
const express = require("express");
const app = express();
const { main_token, mongodb_url } = require("./config.json")
const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const profileModel = require("./models/profileSchema.js")
const { prefix } = require("./config.json")
const client = new Discord.Client({intents: [
  "GUILDS",
  "GUILD_MESSAGES",
  "GUILD_MESSAGE_REACTIONS",
  "GUILD_MEMBERS", 
]});




client.queue = new Map()
process.on('unhandledRejection', console.error);
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
 ["command_handler", "event_handler"].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});
  client.on('messageCreate', async (message) => {
//EMPTY






    //EMPTY
  });


  const { GiveawaysManager } = require('discord-giveaways');
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#000000',
        reaction: '🎉'
        }
});
  // We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;
client.on("messageCreate", async message =>{
    if(message.author.bot) return;
  if(!message.guild) return;
    const reply = new Discord.MessageEmbed()
  .setDescription("You don't have permissions to excute this command")
if(message.content.startsWith(">giveaway")) {
if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply({embeds: [reply]}) 
    let ms = require("ms")
const args = message.content.split(",")
  
    if(!args[1]) return message.channel.send("Specify a duration")
    if(!args[2]) return message.channel.send("Specify a winner count")
if(!args[3]) return message.channel.send("Specify a prize")
client.giveawaysManager.start(message.channel, {
            duration: parseInt(ms(args[1].slice(1))),
            winnerCount: parseInt(args[2]),
            prize: args[3]
        }).catch(err => console.log(err))
  message.delete();
};
  if(message.content.toLowerCase().includes(`<@${client.user.id}>`)) {
    const embed = new Discord.MessageEmbed()
    .setTitle("Hello")
    .setDescription(`Hello <@${message.author.id}> it looks like you have mentioned me in the chat\nI am created by Technology-Power and Aidden\nMy prefix is >\nTo start using me Please type >help`)
          .setFooter(`What a amazing day it is!`)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setAuthor(message.author.username)
    message.reply({embeds: [embed]})
   }
});
  //mongoose
    const mongoose = require("mongoose")
mongoose.connect(mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
// useFindAndModify: false,
}).then(() => {
  console.log("Hey we connected to the DataBase")
});
client.login(main_token)