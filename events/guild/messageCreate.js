const Blacklist = require("../../models/UserBlacklist.js")
const { MessageEmbed } = require("discord.js")
const axios = require("axios")
const { prefix } = require("../../config.json") 
const profileModel = require("../../models/profileSchema.js")

module.exports = async (Discord, client, message) => {
  
   
 let profileData;
  try {



    
   profileData = await profileModel.findOne({ userID: message.author.id })
     
   if (!profileData) {
     let eco = await profileModel.create({
       userID: message.author.id, 
        Username: message.author.username, 
        coins: 10000, 
        bank: 500
       }) 
       eco.save() 
   }
    
   } catch (err) {
    console.log(err)
  };
   
  
    
    
 
  const err = new MessageEmbed()
  .setTitle("ERROR")
  .setDescription(":x: **API or BOT error, please try again!**")
    let randomcodes = ["E82HW0", "38HN02DH", "H8EHE9HD", "EI3ID2993DH", "SYSTEM283UE", "PC928SU2", "LO2IUEJ", 'ERROR83UR', "OBJECT OBJECT", "undefined2", "undefined", "undefined3", "undefined3"]
  const author = new MessageEmbed() 
  .setTitle(`code: ${randomcodes[Math.floor(Math.random() * randomcodes.length)]}`)
          .setDescription(":x: **Chatbot: V.3.0**")
  const m = new MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
  .setTitle("__***Blacklisted***__")
  .setDescription(`**You have been blacklisted by my owner\nYou can't use my commands**\nID: ${message.author.id}`)
  .setFooter("INSTANT KARMA")
  .setColor("RED")
  Blacklist.findOne({
    ID: message.author.id,
    Username: message.author.username,
  }, async (err, data) => {
    if (err) throw err;
    if(!data) {
    const Prefix = prefix
     if(!message.guild) return;
  if(message.author.bot) return;
if(message.content.toLowerCase().startsWith(Prefix)) {
   const args = message.content.slice(Prefix.length).trim().split(/ +/g)
   const commandName = args.shift()
   const command = client.commands.get(commandName)
   if(!command) return;
   command.run(client, message, args, profileData).then(() => {
     console.log(`Loaded ${commandName}`)
   })
   }
} else {
  message.author.send({embeds: [m], content: "Blacklisted"})
}
});


          
              
    
 
//chatbot
    const axios = require("axios")
//==============================
const channel_name = "chatbot"                             //==============================
  if (!message.guild) return;
  if(message.author.id === client.user.id) return;
  if (message.channel.name != channel_name) return
  let res = await axios.get(`http://api.brainshop.ai/get?bid=164005&key=cTGmkvqQaz5dUiW1&uid=1&msg=${encodeURIComponent(message.content)}`);
    };
  //end chatbot