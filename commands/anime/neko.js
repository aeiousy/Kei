const Color = "GREY", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "neko",
  aliases: [],
  group: "fun",
  category: "Image",
  description: "Return A Random Neko!",
  usage: "Neko",
  run: async (client, message, args) => {

    const Items = ["neko", "nekogif"]
    const Data = await Random.GetAnimeImage({ Anime: await Items[Math.floor(Math.random() * Items.length)], Color: Color });
    
    return message.channel.send(Data);
  }
};