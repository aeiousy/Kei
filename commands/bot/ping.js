const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "test command",
    group: "bot",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setColor("GREY")
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);


        message.channel.send(ping);
    }
}