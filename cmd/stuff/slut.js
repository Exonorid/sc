const { MessageAttachment } = require("discord.js");

const util = require("../../util.js");
const randRange = util.randRange;

const success = new MessageAttachment("https://i.imgflip.com/2p0pyy.jpg  ");
const gangbang = new MessageAttachment(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSx9oA53o3pD0tTCdFfjHoQaZcDH1EScvKWgw4wuqj7IukZuCMP"
);
const fail = new MessageAttachment(
  "https://i.pinimg.com/236x/b9/de/44/b9de4421374abcc68f2669bc8600a4b5.jpg"
);
const jackpot = new MessageAttachment(
  "https://cdn.discordapp.com/attachments/730372580468457552/748931073278214234/unknown.png"
);

module.exports = {
  name: "slut",
  module: "stuff",
  sfw: false,
  cooldown: 4140,
  execute: (client, message, args) => {
    const chance = Math.floor(Math.random() * 20);
    let amt = 0;
    switch (true) {
      case chance < 7:
        amt = randRange(100, 500);
        client.economy.add(
          message.guild.id + "." + message.author.id + ".cash",
          amt
        );
        return message.channel.send(
          "Sluttery successful, you earned " + amt + " stunkcoin",
          success
        );
      case chance < 11:
        amt = randRange(400, 1500);
        client.economy.add(
          message.guild.id + "." + message.author.id + ".cash",
          amt
        );
        return message.channel.send(
          "Jackpot! You fucked a rich guy and earned " + amt + " stunkcoin",
          jackpot
        );
      case chance < 16:
        return message.channel.send(
          "Your potion ran out during sex and he beat you up. You earned 0 stunkcoin", fail
        );
      default:
        amt = randRange(500, 1000);
        client.economy.add(
          message.guild.id + "." + message.author.id + ".cash",
          amt
        );
        return message.channel.send(
          "You got gangbanged by " +
            Math.floor(amt / 150) +
            " people and can't walk for a week. But hey, at least you got " +
            amt +
            " stunkcoin", gangbang
        );
    }
  }
};
