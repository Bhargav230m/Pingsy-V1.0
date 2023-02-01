const profileModel = require("../../models/profileSchema.js")
const db = require("../../models/Memberinfo.js")
module.exports = async (Discord, client, guildMember, ) => {

      
  try {
  profileModel.findOne({ userID: guildMember.id});
    if(!profileModel) {
         let eco = await profileModel.create({
         userID: guildMember.id,
    Username: guildMember.user.username,
  coins: 10000,
    bank: 500,
  });
  eco.save()
    } else {
      return;
    }
      
  } catch (err) {
    console.log(err);
  }
  //memberinfo
  if(!MemberInfo) {
       let info = await MemberInfo.create({
    UserID: guildMember.id,
  GuildID: guildMember.guild.id,
  Username: guildMember.user.username,
  Guildname: guildMember.guild.name
  });
info.save();
    } else {
      return;
    }
  const reply = new Discord.MessageEmbed()
    .setTitle("Welcomed!")
    .setAuthor(guildMember.user.username, guildMember.displayAvatarURL({dynamic: true}))
  .setDescription(`Welcome <@${guildMember.user.id}> to our server`)
    .setFooter("Don't forget to read the rules")
      .setColor("RANDOM")
 const channel = guildMember.guild.channels.cache.find(ch => ch.name === '🌻-welcome')
  if(!channel) return;
  channel.send({embeds: [reply]})
  
  const ms = require("ms")
const timeSpan = ms('5 days');
  const k = new Discord.MessageEmbed()
  .setTitle("__Kicked__")
  .setDescription("You have an alt account")
  .setFooter("If you are not an alt than your account must be older than 5 days")
  .setThumbnail(guildMember.displayAvatarURL({dynamic: true}));
  const createdAt = new Date(guildMember.user.createdAt).getTime();
  const difference = Date.now() - createdAt;
  if(difference < timeSpan) {
    guildMember.kick("Kicked because of a ALT account");
  guildMember.send({embeds: [k]})
  };
}