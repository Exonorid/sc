const { MessageAttachment } = require("discord.js");

const img = [
  "https://i.imgflip.com/2r7yt1.jpg",
  "https://files.yande.re/sample/8a6594160e8f63459ba8435f7794160d/yande.re%20477346%20sample%20bikini%20cleavage%20n.g.%20panty_pull%20pussy%20swimsuits%20uncensored%20undressing.jpg",
  "https://i.pinimg.com/736x/4f/b4/d1/4fb4d1b06604a91318fbbcafab3f9dda.jpg"
   ]

module.exports = {
  name:"sellpanties",
  module:"stuff",
  sfw: false,
  cooldown: 1200,
  execute: (client, message, args) => {
    const amount = Math.floor((Math.random() * 101) + 50)
    client.economy.add(message.guild.id + '.' + message.author.id + ".cash", amount)
    message.channel.send("You sold your worn panties earned " + amount, new MessageAttachment(img[Math.floor(Math.random() * img.length)]))
  }
}