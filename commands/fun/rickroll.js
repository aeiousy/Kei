const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'rickroll',
  aliases: ['rick'],
  guildOnly: true,
  clientPermissions: [
    'EMBED_LINKS',
    'ADD_REACTIONS'
  ],
  group: 'fun',
  description: 'NEVER GONNA GIVE YOU UP.',
  examples: [ 'rickroll @user' ],
  parameters: [ 'User Mention' ],
  run: async ( client, message, args ) => {

    // Filter out args so that args are only user-mention formats.
    args = args.filter(x => /<@!?\d{17,19}>/.test(x))

    const url = client.images.rickroll();
    const embed = new MessageEmbed()
    .setColor('GREY')
    .setImage(url)
    .setFooter(`RickRoll | \©️${new Date().getFullYear()} Kei`);

    if (!message.mentions.members.size){

      return message.channel.send(embed.setDescription(`${message.member} get rickrolled`));

    } else if (new RegExp(`<@!?${client.user.id}>`).test(args[0])){

      return message.channel.send(embed.setDescription(`${message.member} why you rickroll me :(`));

    } else if (new RegExp(`<@!?${message.author.id}>`).test(args[0])){

      return message.channel.send(embed.setDescription(`${message.member} NEVER GONNA GIVE YOU UP`));

    } else {

      return message.channel.send(
        embed.setDescription(`${args[0]} GET RICK ROLLED BOI!`)
      );

    };
  }
};
