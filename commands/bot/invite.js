const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "test command",
    group: "bot",

    async run (client, message, args) {


        const ping = new Discord.MessageEmbed()
        .setColor("GREY")
        .setDescription("https://discord.com/api/oauth2/authorize?client_id=702794967403462656&permissions=8&scope=bot");


        message.channel.send(ping);
    }
}