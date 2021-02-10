const Discord = require('discord.js');
module.exports = {
        name: 'avatar',
        description: 'Show user avatar',
        aliases: ["av", "pfp", "icon"],
        usage: '',
        accessableby: "",
    run: async (client, message, args) => {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
    const embed = new Discord.MessageEmbed()
        .setColor("GREY")
        .setTitle(`**Avatar**`)
        .setDescription(`\`Links:\` **[png](${member.user.displayAvatarURL({format: "png", size: 4096})}) | [jpg](${member.user.displayAvatarURL({format: "jpg", size: 4096})}) | [gif](${member.user.displayAvatarURL({format: "gif", size: 4096, dynamic: true})}) | [webp](${member.user.displayAvatarURL({format: "webp", size: 4096})})**`)
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
        .setFooter(`Avatar | \©️${new Date().getFullYear()} Kei`)
        .setTimestamp()
    return message.channel.send(embed)

    }
}
