const profileData = require("../models/profileSchema")
const MemberInfo = require("../models/Memberinfo")
module.exports.run =  async (message, client, args) => {
  try {
    if(!MemberInfo) {
       let info = await MemberInfo.create({
    UserID: message.author.id,
  GuildID: message.guild.id,
  Username: message.author.username,
  Guildname: message.guild.name
  });
info.save();
    } 
    if(!profileData) {
let eco = await profileData.create({
     userID: message.author.id,
  serverID: message.guild.id,
    Username: message.user.username,
  coins: 1000,
    bank: 500,
  });
  eco.save()
    }
    
  } catch (err) {
console.log(err)
  }
    };
module.exports.name = "CA"