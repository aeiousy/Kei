const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "allbots",
  group: "utility",
  run: (client, message, args) => {
    const botssize = message.guild.members.cache.filter(m=>m.user.bot).map(m=> `<@${m.id}> [ ${m.user.username} ]
    **ID :** \`${m.id}\``);
    const x = new MessageEmbed()
    .setColor('GREY')
    .setDescription(`${botssize.join('\n \━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\ \n')}`)
    .setFooter(`Total Bots : ${message.guild.members.cache.filter(member => member.user.bot).size}`)
    message.channel.send(x)
  }
}