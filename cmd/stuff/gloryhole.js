const { MessageAttachment } = require("discord.js");

const img = [
  "https://i.imgur.com/hkoIN33.jpg",
  "https://img2.gelbooru.com/samples/c5/18/sample_c518cd9b10a7443b2f5a90a45ded371d.jpg",
  "https://gelbooru.com/index.php?page=post&s=view&id=5047582&tags=gloryhole+glory_hole",
  
  
];

module.exports = {
  name: "gloryhole",
  module: "stuff",
  sfw: false,
  cooldown: 120,
  execute: (client, message, args) => {
    const amount = Math.floor(Math.random() + 101 + 50);
    client.economy.add(
      message.guild.id + "." + message.author.id + ".cash",
      amount
    );
    message.channel.send(
      "you sucked some strangers cock and earned " + amount + " stunkcoins",
      message.channel.send(new MessageAttachment(img[Math.floor(Math.random() * img.length)]))
    );
  }
};
