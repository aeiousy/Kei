const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
        name: "rwallpaper",
        noalias: [''],
        group: "fun",
        category: "emojis",
        description: "Shows random wallpaper image",
        usage: "",
        accessableby: "everyone",
    run: async (bot, message, args) => {
    if (!message.channel.nsfw) {
        message.react('💢');
        return message.channel.send({embed: {
                color: 16734039,
                description: "You can use this command in an NSFW Channel!"
            }})
    }
  const { body } = await superagent
    .get("https://nekos.life/api/v2/img/wallpaper");
        const embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle("Here's your Random Wallpaper 🤗")
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`RWallpaper | \©️${new Date().getFullYear()} Kei`);
         message.channel.send(embed);
    }
}
