const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "hack",
  category: "extra",
  group: "fun",
  description: "Hack a person",
    run: async (client, message, args) => {
       let target = message.mentions.members.first();

    if(!target) {
      return message.channel.send(`**${message.author.username}**, Please mention the person who you want to hack -.-`)
    }
    
    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, You can not hack yourself >;c`)
    }
      const msg = await message.channel.send(`Hacking is almost done.`);
        const age = Math.floor(Math.random() * 100) + 1;
      const Embed = new MessageEmbed()
        .setTitle("User hacked")
        .setDescription(
          `${target} has been hacked by @${message.author.tag}\n **Information**\n Age: ${age}\n bot: **Yes** `
        )
        .setFooter(`Id: ${target.id}`)
        .setColor('#fb644c');
      msg.edit(Embed);
      msg.edit("\u200b");
    }
};