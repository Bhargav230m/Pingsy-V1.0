
module.exports = (Discord, client, bot) => {
   const invite = new Discord.MessageEmbed()
  .setTitle("Hello there")
  .setDescription("Thanks for inviting me to your server\nMy prefix is >\nPlease type >help to get started, Please run >CA to create your Account")
  .setColor("RANDOM")
  
    const channel = bot.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(bot.me).has('SEND_MESSAGES'))
    channel.send({embeds: [invite]})
  console.log("Bot Joined another server. GG!")
 
};