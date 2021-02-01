const fetch = require('node-fetch');
const{MessageEmbed} = require('discord.js');
module.exports = {
    name:"npc",
    group: "fun",
    async run (client, message, args) {
     let lettext2 = args.join(" ");
     if(!lettext2) return message.channel.send("What's the text?")
        let link = await fetch(`https://vacefron.nl/api/npc?text1= &text2=${lettext2} `)
        let embed = new MessageEmbed()
        .setImage(link.url)
        .setColor("GREY")

        message.channel.send(embed)
        .catch(e => {
            console.log(e)
            return message.channel.send("Something went wrong!")
        })
    }
}
