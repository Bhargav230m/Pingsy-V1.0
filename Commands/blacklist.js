const { MessageEmbed, Discord } = require("discord.js");
const { OwnerId } = require("./../config.json")
const DBB = require("../models/UserBlacklist.js")


module.exports.run = async (client, message, args) => {
    if (!message.author.id == OwnerId) {
      message.reply("You are not my owner!")
    }
  const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!user) {
    message.channel.send("Ayo, Who we are blacklisting - It should be a member not a role!")
  };

DBB.findOne({
  ID: user.user.id,
  Username: user.user.username
}, async (err, data) => {
  if(err) throw err;
  if(data) {
    message.channel.send(`${user} is already blacklisted, Please check the DataBase!\nUserID: ${user.user.id}, Username: ${user.user.username}`)
  } else if (!data) {
    data = new DBB({
      ID: user.user.id,
      Username: user.user.username
    })
    data.save().catch(err => console.log(err))
    message.channel.send(`Blacklisted ${user}\nSaved in DataBase\nID: ${user.user.id}`).then(() => {
      user.send("My owner has blacklisted you from using my commands")
    })
  }
})
};
module.exports.name = "blacklist"