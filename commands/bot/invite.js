const { MessageEmbed } = require('discord.js');
const phrase = () => {
  const p = [
      'Add me to your server with this link!',
      'I-It\'s not like I want to be invited to your server...',
      'Invite me Kouhai!',
      'Hello... Please take me...',
      'I\'d love to be in your server!',
      'Whaa~~ A server? Of course!',
      'P-Please invite me.. to your server...'
  ];
  return p[Math.floor(Math.random() * p.length)];
};

module.exports = {
  name: 'invite',
  aliases: [],
  guildOnly: true,
  group: 'bot',
  description: 'Gives you the invite link',
  clientPermissions: [ 'EMBED_LINKS' ],
  get examples(){ return [ this.name, ...this.aliases ]; },
  run: async (client, message) => {

    const guild_invite = await message.guild.fetchInvites().then(g => {
      if (!g.size){
        return { url: 'There are currently no invite links bound to this server.' };
      } else {
        return g.first();
      };
    }).catch(() => { return {};});

    return message.channel.send(
      new MessageEmbed()
      .setAuthor(phrase())
      .setColor('GREY')
      .setTitle('Invite Kei. Select from the following sets of permissions that best suits her on your server.')
      .addFields([
        {
          name: '\u200b', inline: true,
          value: [
            '[**Default Invite**](https://invite.Kei-san.ml)',
            '[<a:animatedcheck:758316325025087500>](https://invite.Kei-san.ml) Kei\'s default invite.\n',
          ].join('\n')
        },{
          name: '\u200b', inline: true,
          value: [
            '[**Recommended Invite**](https://discord.com/api/oauth2/authorize?client_id=702074452317307061&permissions=1342696567&scope=bot)',
            '<a:animatedcheck:758316325025087500> This invite grants Kei all the necessary permissions for all of her functions to work.\n',
          ].join('\n')
        },{
          name: '\u200b', inline: true,
          value: [
            '[**Full Permissions**](https://discord.com/api/oauth2/authorize?client_id=702074452317307061&permissions=8&scope=bot)',
            '<a:animatedcheck:758316325025087500> This invite grants Kei the `ADMINISTRATOR` privileges.\n',
          ].join('\n')
        },{
          name: '\u200b', inline: true,
          value: [
            '[**No Moderator Privileges**](https://discord.com/api/oauth2/authorize?client_id=702074452317307061&permissions=519249&scope=bot)',
            '<a:animatedcheck:758316325025087500> This invite removes Kei\'s permission to Moderate the server and its members.\n',
          ].join('\n')
        },{
          name: '\u200b', inline: true,
          value: [
            '[**Basic Permissions**](https://discord.com/api/oauth2/authorize?client_id=702074452317307061&permissions=379968&scope=bot)',
            '<a:animatedcheck:758316325025087500> The most basic permission for Kei\'s basic commands to work.'
          ].join('\n')
        },{
          name: '\u200b', inline: true,
          value: '\u200b'
        },{
          name: '\u200b\n**Or get the invite link for this server instead..**', inline: true,
          value: guild_invite.url || '`Unable to fetch server invite link (Requires Manage Guild Permissions).`'
        },{
          name: '\u200b\n**Or the one for Kei support server~**', inline: true,
          value: 'https://support.Kei-san.ml'
        }
      ])
      .setFooter(`Invite Links | \©️${new Date().getFullYear()} Kei`)
    );
  }
};
