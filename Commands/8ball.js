let { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
    let repli = [
        "No.",
        "Never!",
        "NOT POSSIBLE",
        "Impossible.",
        "Nope.",
        "Nah",
        "N O",
        "Yes.",
        "Yeah.",
        "Definitely.",
        "Certainly!",
        "Ofcourse.",
        "YEEEEEEEEE",
        "Yup",
        "Amogos 😳",
    "Sussy.",
    "What",
    "Wait what",
    "ur mom",
    "Ask me later im busy with your mon",
    "yesnt",
    "sus"
    ]

    let no = new MessageEmbed()
    .setDescription("🗿 | 8Ball needs a question to give an answer.")
.setColor("YELLOW")

let replies = repli[Math.floor(Math.random() * repli.length)]

let question = args.join(" ")
    if(!question) return message.reply({embeds: [no]})


let answer = new MessageEmbed()
    .addField("**Question ❓**", `*${question}?*`)
    .setTitle('8Ball answers your question.')
     
    .addField("**Answer 🎱**", `${replies}`)
    .setColor("GOLD")
    

    message.channel.send({embeds: [answer]})

    

    
}
module.exports.name = "8ball"