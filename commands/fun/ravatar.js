const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
        name: "ravatar",
        noalias: [''],
        category: "emojis",
        group: "fun",
        description: "Shows random avatar image",
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
    .get("https://nekos.life/api/v2/img/avatar");
        const embed = new MessageEmbed()
        .setColor("FF0000")
        .setTitle("Here's your Random Avatar 🤗")
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`RAvatar | \©️${new Date().getFullYear()} Kei`);
         message.channel.send(embed);
    }
}
