const profileModel = require("../models/profileSchema.js")
module.exports.run = async (client, message, args)  => {
  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: guildMember.id});
    if(!profileData) {
       let eco = await profileModel.create({
     userID: guildMember.id,
  serverID: guildMember.guild.id,
    Username: guildMember.user.username,
  coins: 10000,
    bank: 500,
  });
  eco.save()
    }
  } catch (err) {
    console.log(err);
  }
  message.channel.send("Successfully created a account")
}
module.exports.name = "create account"