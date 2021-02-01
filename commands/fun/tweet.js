const fetch = require('node-fetch');
const Discord = require("discord.js")
module.exports = {
    name:"tweet",
    group: "fun",
    async run (client, message, args) {
        let text = args.slice(0).join(" ");
        if(!text) return message.channel.send("you need some text there")
        fetch(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text}`)
        .then((res) => res.json())
        .then((body) => {
            let embed = new Discord.MessageEmbed()
            .setTitle("Trump tweeted!")
            .setURL(body.message)
            .setImage(body.message)
            .setColor("GREY")
            message.channel.send(embed)
        })
    }
}
