module.exports = {
  name: "privatebrothel",
  module: "stuff",
  sfw: false,
  cooldown: 1,
  execute: (client, message, args) => {
    let user = (user = message.author);
    if (!client.economy.has(message.guild.id + "." + message.author.id))
      client.economy.set(message.guild.id + "." + message.author.id, {
        cash: 0,
        bank: 0
      });
    if (client.economy.get(`${message.guild.id}.${user.id}.cash`) < 50) {
      message.channel.send("You don't have enough money for that action.");
    } else {
      client.economy.subtract(
        message.guild.id + "." + message.author.id + ".cash",
        50
      );
      if (Math.random() >= 0.55) {
        let earned = Math.random() * 900 + 100;
        message.channel.send(
          "You found the wallet of the last guy and took all the money. You earned " +
            (earned - 50) +
            " stunkcoin."
        );
        client.economy.add(
          message.guild.id + "." + message.author.id + ".cash",
          earned
        );
      } else {
        message.channel.send(
          "You had a good time but didn't find anything. You are now 50 stunkcoin poorer."
        );
      }
    }
  }
};
