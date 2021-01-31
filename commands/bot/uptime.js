const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "uptime",
    aliases: [],
    category: "Fun",
    group: "bot",
    description: "Shows Kei/s uptime",
    usage: "uptime",
    run: async (client, message, args) => {
        
    const d = moment.duration(message.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const minutes = (d.minutes() == 1) ? `${d.minutes()} minute` : `${d.minutes()} minutes`;
    const seconds = (d.seconds() == 1) ? `${d.seconds()} second` : `${d.seconds()} seconds`;
    const date = moment().subtract(d, 'ms').format('dddd, MMMM Do YYYY');
    const embed = new MessageEmbed()
      .setTitle('Kei\'s Uptime')
      .setThumbnail('https://images-ext-2.discordapp.net/external/nRjAoXplPiFi191-sxsCCSPM4On0s9x2LPVsIzmOGAA/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/702794967403462656/5a16e2882b9748c4e755f4093a3f6885.webp?width=473&height=473')
      .setDescription(`\`\`\`\n${days}, ${hours}, ${minutes}, and ${seconds}\`\`\``)
      .addField('Date Launched', date) 
      .setFooter(`Uptime | \©️${new Date().getFullYear()} Kei`)
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};