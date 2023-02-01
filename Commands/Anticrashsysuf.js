const express = require("express");
const app = express();
const Discord = require("discord.js");
module.exports.run = (client, message, args) => { 
  const noperms = new Discord.MessageEmbed()
  .setDescription(`:x: **${message.author.username} you dont have permision to run this command, you need to be a Administrator or Owner of this server to run this command.\n if you think this a false error then try again!**`)
  if(!message.member.permissions.has("ADMINISTRATOR")) return   message.reply({embeds:[noperms]})
  let anticrashsys = ("Anti crash system says, Client is working properly")
  let anticrashsysr = ("Anti crash system says, ")
  console.log(`${anticrashsys}!`);
    const anticrashsys1 = new Discord.MessageEmbed()
    .setDescription("`ANTI_CRASH_SYSTEM IS ACTIVATED FOR YOUR SERVER`")
      message.author.send({embeds:[anticrashsys1]})
  };
module.exports.name = "Anticrashsysuf"