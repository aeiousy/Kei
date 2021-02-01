const Color = "GREY", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "pornhubcomment",
  aliases: ["phubcomment", "pc"],
  category: "Image",
  group: "fun",
  description: "Return A Pornhub Comment Image!",
  usage: "Pornhubcomment <Username> <Comment>.",
  run: async (client, message, args) => {
    
    const Username = args[0];
    if (!Username || Username.length > 15) return message.channel.send("Please Give Username (15 Characters Limit)!");

    const Comment = args.slice(1).join(" ");
    if (!Comment || Comment.length > 150) return message.channel.send("Please Give Comment (150 Characters Limit)!");

    const Data = await Random.PornhubComment({ Name: Username, Image: message.author.avatarURL({ format: "png" }), Comment: Comment, Color: Color });

    return message.channel.send(Data);
  }
};