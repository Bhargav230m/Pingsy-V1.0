const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
  const botrename = new Discord.MessageEmbed()
  .setDescription("Ayo!\ni already have a name")
  let nicknames = ["Boy", "Canman", "Preston", "SB", "Pink Guy", "Evil Man", "Dead", "Unlucky", "Lucky", "Pingsy Dad", "Dick", "Dumbass", "etc guy", "programmer", "230m", "Bhargav Raj", "Christano Ronaldo", "Technology Power", "skittle", "Aideen", 'Stupid', "Salman Khan",'Shreya', "Jalebi", "Girl", "Robot",'Ping Guy','Shah rukh khan',"Messed Guy", "Tensioned", "Plot", 'Diet guy', "Man", "Women", "Mayank-Raj", "Programmer", "Owner", "Mathemician",'Noob','Notch', "Pro", "Legend", 'Sam','Jack','Tommyinnit', "Dream", "GeorgeNotFound",'Sapnap', "ClownPierce",'Tubbo', "Parrot",'Simon', "Tommyinit", "Carryminati",'Random Guy', 'Antfrost', "Technoblade", "Random", "stranger", "name","Mother", "Father", "Dumsmart", "Stupalo", "Seso", "Fongo", "Matje", "Bitto", "Trophle", "Ardheen", 'Georgian', "Kekma",'Fetish', "Jacuzzi", "Boucl", "Balucci", 'Gobo','Dodoro',"NO ANIME", "Yoyoyo", "Nonono", 'Qopoo', "Shifoo", "Naga", "Miolech", "Titi", "Riri", "And what",'Maam','Dhad', "Hadit", "Enougho", 'Tippi','Sijji','Bruh.mp4', "Repeat", "NotSoBot", 'Emojis', "Darsa", 'Stubbs the Blubbs', "Carote", 'Diek', "Sushu", "Margayomi", 'Weardo', 'Mangojo', "Lolita", "Astraga", "Eve", "Foff"]
  let member = message.mentions.users.first()
  const nomem = new Discord.MessageEmbed()
    .setTitle("New name found")
  .setDescription(`${nicknames[Math.floor(Math.random() * nicknames.length)]} is your new name!`)
  const mem = new Discord.MessageEmbed()
  .setTitle("New name found")
  .setDescription(`${nicknames[Math.floor(Math.random() * nicknames.length)]} is ${member}'s new name!`)
  if(!member) message.reply({embeds: [nomem]}) 
  else {
        const embed2 = new Discord.MessageEmbed()
    .setDescription("You can't name me!, Cuz i already have a name XD!")
    .setColor("RANDOM")
    if(member.id === client.user.id) return message.reply({embeds: [embed2]})
  message.reply({embeds: [mem]})  
  }
}
module.exports.name = "name"