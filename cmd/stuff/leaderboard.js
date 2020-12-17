const { MessageEmbed } = require("discord.js");

const MAX_ON_LB = 5;

module.exports = {
  name: "leaderboard",
  module: "economy",
  sfw: true,
  execute: (client, message, args) => {
    var arr = [];
    for (let i in client.economy.get(message.guild.id)) { //Put all members into arr
      const amount =
        client.economy.get(message.guild.id + "." + i + ".cash") +
        client.economy.get(message.guild.id + "." + i + ".bank");
      arr.push([i, amount]);                              //Elements of arr are of the form [id, balance]
    }
    if (arr.length == 0)
      return message.channel.send("There's no one in the leaderboard");
    const embed = new MessageEmbed()
      .setTitle(message.guild.name + "'s top 5 leaderboard:")
      .setThumbnail(message.guild.iconURL())
      .setTimestamp()
      .setColor("GOLD");

    arr.sort(function(a, b) { //Sort array but amount of money (balance is element 1 in each element of arr)
      return b[1] - a[1];
    });

    const senderID = message.author.id;
    let senderOnLB = false; //Whether the sender is on the leaderboard
    for (let e = 0; e < MAX_ON_LB && e < arr.length; e++) {
      const id = arr[e][0];
      const m1 = message.guild.members.cache.find(m => m.id == id);
      if (m1 == undefined) { //If the member doesnt exist, skip it
        console.log(`Member with id ${id} is undefined!`);
        continue;
      }
      let isSender = senderID == id; //Put '(you)' in the field if the current user is the sender
      embed.addField(
        m1.user.tag + (isSender ? " (you):" : ":"),
        `cash: **${client.economy.get(`${message.guild.id}.${id}.cash`)}**\n` +
          `bank: **${client.economy.get(
            `${message.guild.id}.${id}.bank`
          )}**\n` +
          `total: **${arr[e][1]}**`
      );
      senderOnLB |= isSender; //Make senderOnLB true if the current user is the sender
    }
    if (!senderOnLB) { //If the sender isn't on the leaderboard, add them at the bottom
      let cash = client.economy.get(`${message.guild.id}.${senderID}.cash`);
      let bank = client.economy.get(`${message.guild.id}.${senderID}.bank`);
      embed.addField(
        `${message.author.tag} (you):`,
        `cash: **${cash}**\n` +
          `bank: **${bank}**\n` +
          `total: **${cash + bank}**`
      );
    }
    message.channel.send(embed); //Send the embed
  }
};

/*
for (let i in client.economy.get(message.guild.id)) {
        if (
          client.economy.get(message.guild.id + "." + i + ".cash") +
            client.economy.get(message.guild.id + "." + i + ".bank") ==
          arr[e]
        ) {
          const m = message.guild.members.cache.find(m => m.id == i);
          l.addField(
            m.user.tag + ":",
            "**cash: **" +
              client.economy.get(message.guild.id + "." + i + ".cash") +
              "\n**bank: **" +
              client.economy.get(message.guild.id + "." + i + ".bank") +
              "\n**total: **" +
              arr[e]
          );
          if (m == message.author) {
            l.setDescription("you are " + e + " in the leaderboard");
          }
        }
      }
*/
