const Color = "GREY";
const Discord = require("discord.js");

module.exports = {
  name: "grave",
  group: "fun",
  aliases: ["rip" ,"gv"],
  category: "Image",
  description: "Return A Grave Image!",
  usage: "Grave | <Mention Or ID>",
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://vacefron.nl/api/grave?user=${Member.user.displayAvatarURL({ format: "png" })}`))
    setFooter(`Grave | \©️${new Date().getFullYear()} Kei`)
    .setTimestamp();

    return message.channel.send(Embed);
  }
};