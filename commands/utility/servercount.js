const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = {
    name: 'servercount',
    aliases: [ 'scount' ],
    clientPermissions: [ 'EMBED_LINKS' ],
    group: 'utility',
    description: 'Shows servericon of the server you are in.',
    parameters: [ 'User Mention / ID' ],
    get examples(){ [ this.name, ...this.aliases].map(x => x + ' @user')},
    run: async (client, message, args,) => {

    const counts = stripIndent`
      Servers :: ${message.client.guilds.cache.size}
      Users   :: ${message.client.users.cache.size}
    `;
    const embed = new MessageEmbed()
      .setTitle('Keis server count')
      .setDescription(stripIndent`\`\`\`\n${counts}\`\`\``)
      .setFooter(`ServerCount | \©️${new Date().getFullYear()} Kei`)
      .setTimestamp()
      .setColor('GREY');
    message.channel.send(embed);
  }
};