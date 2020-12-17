module.exports = {
  name:"ezquest",
  module: "stuff",
  sfw: true,
  cooldown: 300,
  execute: (client, message, args) => {
    if (!client.economy.has(message.guild.id + "." + message.author.id)) client.economy.set(message.guild.id + "." + message.author.id, {cash: 0, bank: 0})
    switch (Math.floor(Math.random() * 20)) {
      case 0:
        message.channel.send("quest failed but savior crim saved your life, you paid Crim 100 stunkcoin as thanks")
        return client.economy.subtract(message.guild.id + "." + message.author.id + ".cash", 100)
      default:
        let amount = Math.floor(Math.random() * 96) + 5
        client.economy.add(message.guild.id + "." + message.author.id + ".cash", amount)
        return message.channel.send("quest successful, your reward is " + amount + " stunkcoin")
    }
  }
}