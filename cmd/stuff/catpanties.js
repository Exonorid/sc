const { MessageAttachment } = require("discord.js");

const imgs = [
"https://i.kym-cdn.com/photos/images/newsfeed/001/071/082/8b0.jpg",
"https://i.kym-cdn.com/photos/images/newsfeed/001/071/776/862.png",
"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/27bdc9c5-fbbe-4db7-b302-6ec33a32d1f7/d9qrxcz-3470db82-40fe-4d1a-ae90-9da550ac89d8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjdiZGM5YzUtZmJiZS00ZGI3LWIzMDItNmVjMzNhMzJkMWY3XC9kOXFyeGN6LTM0NzBkYjgyLTQwZmUtNGQxYS1hZTkwLTlkYTU1MGFjODlkOC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.3D6iHLlPazLp4zSYg5YnNs8ppxovKMpNbtnjUY9dDIE",
  "https://i.kym-cdn.com/photos/images/newsfeed/001/136/833/516.png",
  "https://i.kym-cdn.com/photos/images/newsfeed/001/077/387/e07.jpg",
  "https://pm1.narvii.com/6195/41467dd0e3a7dfc92bc45d9e314365911741bff6_hq.jpg",
  "https://pm1.narvii.com/6195/45d5b45866bd910baa16569d531ed261d0b07f69_hq.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3b0a5077-4fbb-498b-9c3a-f8e85177282a/d9pwz5c-4a2b044b-1739-4548-9f94-51e6a7941cc1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2IwYTUwNzctNGZiYi00OThiLTljM2EtZjhlODUxNzcyODJhXC9kOXB3ejVjLTRhMmIwNDRiLTE3MzktNDU0OC05Zjk0LTUxZTZhNzk0MWNjMS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.axZFSm4UJRAtxRS0NKqTB8t8vYw7rMFCJ1vxzjgCiYE",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6771e56e-2738-4837-8428-43974fe4b8a7/d9pmoxb-e0214870-e5aa-4f6b-bcca-f2967ab8b17b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjc3MWU1NmUtMjczOC00ODM3LTg0MjgtNDM5NzRmZTRiOGE3XC9kOXBtb3hiLWUwMjE0ODcwLWU1YWEtNGY2Yi1iY2NhLWYyOTY3YWI4YjE3Yi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.LFWItsJFKQEiHWbJMVMLYijZEEWF4C3ll99oZEnnGaI",
  "https://w.wallhaven.cc/full/5d/wallhaven-5dre81.png",
  "https://static.zerochan.net/Yuuki.Asuna.full.2025733.jpg",
  "https://d1flfk77wl2xk4.cloudfront.net/Assets/GalleryImage/14/070/L_g0052407014.jpg",
  "https://i.pinimg.com/564x/3a/39/7e/3a397e548839540cbc1d545266d99f00.jpg",
  "https://i.pinimg.com/originals/9b/f7/1d/9bf71d55fcb75fc757004b532ba656ca.jpg",
  "https://safebooru.org//images/1610/64fb57d2c5e8261b80a3ad995de84423e720b769.jpg?1686612",
  "https://i.pinimg.com/564x/eb/c5/66/ebc566ac4e25ae9ef19387e133c7aade.jpg",
  "https://i.pinimg.com/564x/5d/e2/a5/5de2a5248def2c1220cbae088f572b18.jpg",
  "https://i.imgur.com/wpDztQl.png",
];

module.exports = {
  name: "catpanties",
  module: "stuff",
  sfw: false,
  cooldown: 1,
  execute: (client, message, args) => {
    return message.channel.send(new MessageAttachment(imgs[Math.floor(Math.random() * imgs.length)]));
  }
};