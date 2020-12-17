const { MessageAttachment } = require("discord.js");

const imgs = [
  "https://us.rule34.xxx//samples/1491/sample_f1ae5a646d971bc0abc84d2d72aa8510395ff989.jpg?1575556",
  "https://tse2.mm.bing.net/th?id=OIP.K66kGhX9RZTaqjn0Tx5rrwHaKi&pid=15.1",
  "https://cdnio.luscious.net/Pintudo/283453/bunny-girl-bukkake-cum-everywhere-hentai-girl_01BE82H6BD6Z2W45NSM7Y7FNEX.1024x0.jpg",
  "https://cdnio.luscious.net/the_nobsrp/513/lusciousnet_lusciousnet_bukkake_1229708170.jpg",
  "https://cdnio.luscious.net/Kigane/283073/tumblr_m44bi1uevm1qcucr8o1_1280_01BD7FGB0PS8XKMT5GA2BBYKRV.jpg",
  "https://w640.luscious.net/Coreydem/276841/hentai-cum-on-floor-open-mouth-cum-in-pussy-cum-o_01B626CFFCQJXSZKJQFBBJW3VY.640x0.jpg",
  "https://static.hentai-image.com/upload/20140531/23/23513/1.jpg",
  "https://img.rule34.xxx/samples/972/sample_3a1f81738f8d8f85d428d4a82348a4b9b610147c.jpg",
  "https://slacker.scrolller.com/media/35b706.jpg"
];

module.exports = {
  name: "bukkake",
  module: "stuff",
  sfw: false,
  cooldown: 1,
  execute: (client, message, args) => {
    return message.channel.send(new MessageAttachment(imgs[Math.floor(Math.random() * imgs.length)]));
  }
};
