//https://www.youtube.com/watch?v=QLO4tg0ubXc
module.exports = {
  name:"intro",
  module: "stuff",
  sfw: true,
  execute: (client, message, args) => {
    message.channel.send("https://www.youtube.com/watch?v=QLO4tg0ubXc")
  }
}