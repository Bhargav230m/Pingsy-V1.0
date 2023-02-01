module.exports.run = (client, message, args) => {
    let channel = message.mentions.channels.first()
    if(!channel) return message.reply("Please mention a channel")
    let mos = args.slice(1).join(" ")
    if(!mos) return message.reply("Please type a message to send")
    else {
     channel.send(mos)
      message.delete(2)
    };
};
  module.exports.name = "send-msg"