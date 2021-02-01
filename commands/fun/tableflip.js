const fetch = require('node-fetch');
const{MessageEmbed} = require('discord.js');
module.exports = {
    name:"tableflip",
    group: "fun",
    async run (client, message, args) {
        let member = message.mentions.members.first() || message.member;
        let uxd= member.user.displayAvatarURL({dynamic: false})
        let link = await fetch(`https://vacefron.nl/api/tableflip?user=${uxd}`)
        let embed = new MessageEmbed()
        .setImage(link.url)
        .setColor("GREY")

        message.channel.send(embed)
        .catch(e => {
            console.log(e)
            return message.channel.send("Something went wrong.")
        })
    }
}
