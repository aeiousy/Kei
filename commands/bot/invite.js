const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Link to invite me',
    aliases: [""],
    group: "bot",
    usage: '',
    accessableby: "",
    run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setDescription(
      "**👋 Hey!\n Do you want Invite me? [Click Here](https://discord.com/api/oauth2/authorize?client_id=702794967403462656&permissions=8&redirect_uri=https%3A%2F%2Fmini-website.vercel.app%2Fauth%2Flogin&scope=bot) to Invite me!\nThanks for supporting me.** ❤️"
    )
    .addField(
      "Support Link: ",
      `**[Click Here!](https://discord.gg/uFTvyB22RX)**`,
      true
    )
    .addField(
      "Vote Link:",
      `**[Click Here!](https://top.gg/bot/702794967403462656)**`,
      true
    )
    .setTimestamp()
    .setFooter(`Invite | \©️${new Date().getFullYear()} Kei`)
    .setColor("GREY");
    message.channel.send(embed)
    }
}
