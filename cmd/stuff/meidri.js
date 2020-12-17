const { MessageAttachment } = require("discord.js")
const util = require("../../util.js")

const imgs = [
  "https://cdn.discordapp.com/attachments/668445770587963392/748716183863296030/ddq9oz7-52c97d53-8ed2-4007-8741-997a3f5691e9.png",
  "https://safebooru.org//images/2909/0a5806df381e253450a712b8a32d437c14d2cd6f.jpg",
  "https://i.imgur.com/nefHdLS.png",
  "https://i.redd.it/3piom0avdik41.png",
  "https://i.pinimg.com/236x/f1/9f/2c/f19f2c42f71a5cadcb14e66a8f0673f1.jpg",
  "https://i.pinimg.com/236x/e1/5d/57/e15d57e384f80b960e1fd3105d04c9b8.jpg",
  "https://i.redd.it/xx7eyvy19r551.jpg",
  "https://i.redd.it/7si1wuqwpsg41.jpg",
  "https://i.redd.it/wsvl2hsccm651.jpg"
];

//https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5c04ae65-f3ad-434c-8fda-cc88521f854c/ddq9oz7-52c97d53-8ed2-4007-8741-997a3f5691e9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNWMwNGFlNjUtZjNhZC00MzRjLThmZGEtY2M4ODUyMWY4NTRjXC9kZHE5b3o3LTUyYzk3ZDUzLThlZDItNDAwNy04NzQxLTk5N2EzZjU2OTFlOS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.9s2RT51IlZCGhC4xnC7WPudd9vhYkiF71-LZY_0c7jM
module.exports = {
  name: "meidri",
  module: "stuff",
  sfw: true,
  execute: (client, message, args) => {
    message.channel.send(new MessageAttachment(util.pickRand(imgs)));
  }
};
