const Discord = require("discord.js")
const { MessageActionRow, MessageSelectMenu } = require('discord.js')
const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
  const Discord = require("discord.js")
  const commands = client.commands.map(command => command.name).join(", ")
  
  const embed1 = new Discord.MessageEmbed()
  .setTitle(`Total Commands: 43`)
  .setDescription("Click the menu below to view help menu!")
  .setFooter("Prefix is >")
  .setColor("RANDOM")
  const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('Select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: '🛑 Moderation',
              description: 'Moderation Commands!',
              value: 'first',
						},
						{
							label: '😄 Fun',
							description: 'Fun Commands!',
							value: 'second',
						},
            {
            label: '⌚Info',
							description: 'Infomation Commands!',
							value: 'Third',
            },
            {
                   label: '☑️Enable/Disable',
							description: 'Enable/Disable Features',
							value: 'Fourth',
            },
            {
               label: '🎉Giveaway',
							description: 'Giveaway commands',
							value: 'Fivth',
            },
            {
              label: '💸Economy',
              description: 'Economy Commands!',
              value: 'sixth'
            },
            {
              label: 'SYSTEM FILE',
              description: 'System Files',
              value: 'seventh'
            },
            {
              label: '👑Owner',
              description: "Commands that only my owner can use",
              value: 'eighth'
            },
					]),
			);
	let msg = await	message.reply({ embeds: [embed1], components: [row]});
  
  const embeds = new Discord.MessageEmbed()
  .setTitle("🛑 Moderation")
  .setDescription("**mute, unmute, kick, ban, warn, lock, unlock, timeout, rename-channel, unban, add-role, remove-role, purge**")
  .setFooter("Only MOD/ADMIN/OWNER can use these commands")
  .setColor("RANDOM")
    const embed2 = new Discord.MessageEmbed()
   .setTitle("😄 Fun")
  .setDescription("**kill, bing, ping, name, hack, ty, 8ball, send-msg, dm, amogus, create-embed, say, coinflip, rate**")
  .setFooter("Everyone can use these command!")  
    .setColor("RANDOM")
   const embed3 = new Discord.MessageEmbed()
   .setTitle("⌚Info")
  .setDescription("**invite, help, badge, anime, npm, uptime**")
  .setFooter("Everyone can use these command!")
    .setColor("RANDOM")
   const embed4 = new Discord.MessageEmbed()
   .setTitle("☑️Enable/Disable")
  .setDescription("**EAI, DAI, EWLCM, DWLCM**")
  .setFooter("Only MOD/ADMIN/OWNER can use these commands")
    .setColor("RANDOM")
   const embed5 = new Discord.MessageEmbed()
   .setTitle("🎉Giveaway")
  .setDescription("**giveaway**")
  .setFooter("Only MOD/ADMIN/OWNERS can use this command")
    .setColor("RANDOM")
  const embed6 = new Discord.MessageEmbed()
  .setTitle("💸Economy")
  .setDescription("**balance, daily**")
  .setFooter("Everyone can use these commands")
  .setColor("RANDOM")
   const embed7 = new Discord.MessageEmbed()
   .setTitle("SYSTEM FILE")
  .setDescription("**Anticrashsys-(system-file)**")
  .setFooter("Can't access this command")
    .setColor("RANDOM")
  const embed8 = new Discord.MessageEmbed()
  .setTitle("👑Owner")
  .setDescription("**serverlist**")
    .setFooter("Only Bot owners can use this bot!")
  .setColor("RANDOM")
  const collector = message.channel.createMessageComponentCollector({
    componentType: "SELECT_MENU"
  });
  collector.on("collect", async (collected) => {
    const value = collected.values[0]

    if(value === "first") {
      collected.reply({embeds: [embeds], ephemeral: true})
    };
    if(value === "second") {
      collected.reply({embeds: [embed2], ephemeral: true})
    };
    if(value === "Third") {
      collected.reply({embeds: [embed3], ephemeral: true})
    };
    if(value === "Fourth") {
      collected.reply({embeds: [embed4], ephemeral: true})
    };
    if(value === "Fivth") {
      collected.reply({embeds: [embed5], ephemeral: true})
    };
    if(value === "sixth") {
      collected.reply({embeds: [embed6], ephemeral: true})
    };
    if(value === "seventh") {
      collected.reply({embeds: [embed7], ephemeral: true})
    };
    if(value === "eighth") {
      collected.reply({embeds: [embed8], ephemeral: true})
    };
  });
};
module.exports.name = "help"
module.exports.description = "A advanced help command"