const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
const botkill = new Discord.MessageEmbed()
.setTitle("Can't kill me")
  .setDescription("Hello there\nyou can't kill me! so sadge")
  const authorkill = new Discord.MessageEmbed()
.setTitle("Can't kill you")
  .setDescription("Hello there\nWhy you want to kill your self!")
  
  let deathmessages = ["Died lol", "Dead", "Died to poisoning", "Was hunted by lion and died lol", "Fell for a trap by Technology", "Died to hunger lol", "Dead lol", "Died to dancing lol", "Died in World War 3", 'Died in covids 3rd wave', 'Was brutually murdered by a bear', 'Fell from ladders', 'Died by a heart attack', 'got shot by skittle and Aidenn also Technology power', 'tried to swim in lava', "Messed up in his job and got fired by his boss (so cruel) after that he got bankrupted bcoz of no money and died to heart attack"]
  let member = message.mentions.users.first()
  const nomem = new Discord.MessageEmbed()
  .setTitle("Mention a member")
  .setDescription("It looks like you forgot to mention a member")
  if(!member) message.reply({embeds: [nomem]}) 
  else {
    const embed2 = new Discord.MessageEmbed()
    .setDescription("You can't kill me!")
    .setColor("RANDOM")
    if(member.id === client.user.id) return message.reply({embeds: [embed2]})
    const embed3 = new Discord.MessageEmbed()
    .setDescription("You can't kill you yourself!")
    if(member.id === message.author.id) return message.reply({embeds: [embed3]})
  const killed = new Discord.MessageEmbed()
  .setTitle("Killed")
  .setDescription(`${member} ${deathmessages[Math.floor(Math.random() * deathmessages.length)]}`)
  message.reply({embeds: [killed]}) 
  };
};
module.exports.name = "kill"