const Discord = require('discord.js');
module.exports = {
    name: 'coinflip',
    aliases: ["flip"],
    description: "Flip a Coin",
    run: async (client, message, args) => {

        const num = (Math.random()*100)+1

        const newEmbed = new Discord.MessageEmbed()
        .setColor('GREY')
        .setTitle('The Coin Landed on:')
        .setImage('https://media.discordapp.net/attachments/719130456301502517/796060246132785182/Untitled_design_3.gif')
        .setTimestamp()
        if (num >= 0 && num <= 45) {
            newEmbed.setDescription('Heads')
        } else if (num > 46 && num <=91) {
            newEmbed.setDescription('Tails')
        } else {
            newEmbed.setDescription('Its SIDE?!')
        }

        message.channel.send(`**${message.author.username} Flipped a Coin!**, **Choose a Side Now, you have 5 Seconds!**`)
        setTimeout(function(){
            message.channel.send(newEmbed);
         }, 5000);
    }

}
