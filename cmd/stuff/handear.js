const { MessageAttachment } = require("discord.js");

const imgs = [
  "https://cdn.discordapp.com/attachments/758413811685523516/763426705414553630/sample_8c4348bb4097a7cd3bd86949f4cfeeeae74e94dd.jpg",
 "https://cdn.discordapp.com/attachments/758413811685523516/763426705725456434/9056265026ea338553337f89a92195d4b9ab95ac.png",
  "https://cdn.discordapp.com/attachments/758413811685523516/763426706111201320/sample_c449eb57fcff824d1fbf32e4e3c470cda27db71c.jpg",
  "https://cdn.discordapp.com/attachments/758413811685523516/763426706396282910/7ad22ed7cbf9a5a60bd05f57b397fcd99d200ee0.jpg",
  "https://cdn.discordapp.com/attachments/758413811685523516/763426706757255248/sample_b5a189512c16b8e20b2b1344cc00a206b04dff80.jpg",
  "https://cdn.discordapp.com/attachments/758413811685523516/763426707088474132/0c9057b8ca74e347a798621d0bb5988abd223385.jpg",
  "https://cdn.discordapp.com/attachments/758413811685523516/763427112803500062/fd7429ace8fe2cee03e8a5892ef47eb6cdbb9620.png",
  "https://cdn.discordapp.com/attachments/758413811685523516/763427153643175976/89d5c773ca15a38f8e625a388f8a6d355c228d3b.jpg",
  "https://cdn.discordapp.com/attachments/758413811685523516/763427383901683732/e5e44195bd4046b45ea411624d6ccac2e9e2f238.png",
  "https://cdn.discordapp.com/attachments/758413811685523516/763427412478263337/sample_535630c5c5f4c513c94ce61cb56ed84f7ec79b4b.jpg",
  "https://cdn.discordapp.com/attachments/758413811685523516/763427440416260116/sample_c93246cbead337f55b2c2c0922ea9213a9a14b4c.jpg",
  "https://cdn.discordapp.com/attachments/758413811685523516/763427467703746560/f5014102be799e9a914312f74dedf0ace28c3296.png",
  "https://cdn.discordapp.com/attachments/758413811685523516/763427558854361108/AsIsQwkv_ILmK-ujQ1HU3CNjDN58Xrn-Y0bkWfRLac4.png",
  "https://cdn.discordapp.com/attachments/758413811685523516/763427610628718632/gjAqsoRf0RhgOVgJYiPhBLaAphFCR4gqbh3Gi7cXDaY.jpg",
  "https://cdn.discordapp.com/attachments/758413811685523516/763427637171191848/jdWP75Mv0LIMGB0GunHzsVQ7Voi_lzO3EVZTYFpgvJI.png",
  "https://cdn.discordapp.com/attachments/758413811685523516/763427671031808000/awoxZY8_700bwp.webp"
];

module.exports = {
  name: "handear",
  module: "stuff",
  sfw: false,
  cooldown: 1,
  execute: (client, message, args) => {
    return message.channel.send(new MessageAttachment(imgs[Math.floor(Math.random() * imgs.length)]));
  }
};
