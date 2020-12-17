const { MessageAttachment } = require("discord.js");

const img = new MessageAttachment(
  "https://steamuserimages-a.akamaihd.net/ugc/930464212280049422/610789D92763D2AF2A75CBE363593D9590D1B0B6/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
);

module.exports = {
  name: "suckcock",
  module: "stuff",
  sfw: false,
  cooldown: 600,
  execute: (client, message, args) => {
    const amount = Math.floor(Math.random() * 101 + 100);
    client.economy.add(
      message.guild.id + "." + message.author.id + ".cash",
      amount
    );
    message.channel.send(
      "You sucked some stranger’s massive cock earned " + amount,
      img
    );
  }
};
