module.exports = {
  name:"regquest",
  module: "stuff",
  sfw: true,
  cooldown: 600,
  execute: (client, message, args) => {
    const amount = (Math.floor(Math.random() * 201)) + 100
    if (!client.economy.has(message.guild.id + "." + message.author.id)) client.economy.set(message.guild.id + "." + message.author.id, {cash: 0, bank: 0})
    if (Math.random() <= 0.65) {
      client.economy.add(message.guild.id + "." + message.author.id + ".cash", amount)
      return message.channel.send("quest successful, your reward is " + amount)
    } else {
      message.channel.send("quest failed but savior crim saved your life, you paid Crim 100 stunkcoin as thanks")
      return client.economy.subtract(message.guild.id + "." + message.author.id + ".cash", 100)
    }
  }
}