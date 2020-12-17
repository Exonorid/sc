const { MessageAttachment } = require("discord.js");

const imgs = [
"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c15d7ee-64a1-484e-94bf-d29d661f3327/ddn3fg1-7a217bdb-0bba-4c04-a5c9-5f1ba4cc3f2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOGMxNWQ3ZWUtNjRhMS00ODRlLTk0YmYtZDI5ZDY2MWYzMzI3XC9kZG4zZmcxLTdhMjE3YmRiLTBiYmEtNGMwNC1hNWM5LTVmMWJhNGNjM2YyYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.WEEnZByov4yn4793V-B2VxGOXL29qYLiZqFPLLfr2vA",
  "https://mocah.org/uploads/posts/4512368-eromanga-sensei-izumi-sagiri-pink-underwear-ecchi.png",
  "https://brownyq.files.wordpress.com/2016/02/screen-shot-2016-02-06-at-10-20-25-pm.png",
  
];

module.exports = {
  name: "panties",
  module: "stuff",
  sfw: false,
  cooldown: 1,
  execute: (client, message, args) => {
    return message.channel.send(new MessageAttachment(imgs[Math.floor(Math.random() * imgs.length)]));
  }
};