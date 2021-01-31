const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'servericon',
  aliases: [ 'sicon' ],
  clientPermissions: [ 'EMBED_LINKS' ],
  group: 'utility',
  description: 'Shows servericon of the server you are in.',
  parameters: [ 'User Mention / ID' ],
  get examples(){ [ this.name, ...this.aliases].map(x => x + ' @user')},
  run: async (client, message, [user = '']) => {

    let color;

    if (message.guild){
      const id = (user.match(/\d{17,19}/)||[])[0] || message.author.id;

      member = await message.guild.members.fetch(id)
      .catch(() => message.member);

      color = member.displayColor || 'GREY';
      user = member.user;
    } else {
      color = 'GREY';
      user = message.author;
    };

    const servericon = message.guild.iconURL({ format: 'png', dynamic: true, size: 4096 });

    return message.channel.send(
      new MessageEmbed()
      .setColor(color)
      .setImage(servericon)
      .setFooter(`ServerIcon | \©️${new Date().getFullYear()} Kei`)
      .setDescription(`[Server icon for **${message.guild.name}**](${servericon})`)
    );
  }
};