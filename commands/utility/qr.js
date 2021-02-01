const Color = "GREY", Discord = require("discord.js");

module.exports = {
  name: "qr",
  aliases: ["qrcode"],
  category: "Fun",
  group: "utility",
  description: "Return A Qr Image!",
  usage: "Qr <Message>",
  run: async (client, message, args) => {
    
    const Msg = args.join("+");
    if (!Msg) return message.channel.send("Please Give Your Message!");

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://chart.googleapis.com/chart?chl=${Msg}&chs=200x200&cht=qr&chld=H%7C0`))
    .setFooter("To Get Chart Content, You Can Use imgonline.com.ua")
    .setTimestamp();

    return message.channel.send(Embed);
  }
};