module.exports = {
  name: "clearbal",
  aliases: ["resetbal"],
  module: "economy",
  sfw: true,
  ownerOnly: true,
  execute: (client, message, args) => {
    let channel = message.channel;
    const name = args[0]
    let member = message.mentions.members.first()
    if (!member) {
      member = message.guild.members.cache.find(e => e.user.username == name || e.id == name || e.user.tag == name)
      if (!member) return channel.send("You dumb bitch thats not a member")
    }
    client.economy.set(message.guild.id + "." + member.id, {cash: 0, bank: 0})
    channel.send(`Successfully cleared ${member.user.tag}\'s balance`);
  }
}