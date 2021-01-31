const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "test command",
    group: "bot",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setColor("#fa95b1")
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);


        message.channel.send(ping);
    }
}