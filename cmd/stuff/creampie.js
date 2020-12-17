module.exports = {
  name: "creampie",
  module: "stuff",
  sfw: false,
  cooldown: 86400,
  execute: (client, message, args) => {
    switch (Math.floor(Math.random() * 2)) {
      case 0:
        return message.channel.send("You failed no baby no money")
        break;
      case 1:
        client.economy.add(message.guild.id + "." + message.author.id + ".cash", 900)
        message.channel.send("You got pregnant and gave birth to a new species and sold it for 900 stunk coins")
        break;
    }
  }
}