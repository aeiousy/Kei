const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'wave'
  , aliases: []
  , guildOnly: true
  , clientPermissions: [
    'EMBED_LINKS',
    'ADD_REACTIONS'
  ]
  , group: 'action'
  , description: 'Say hi or goodbye'
  , examples: [
      'wave'
  ]
  , parameters: []
  , run: async ( client, message, args ) => {

    return message.channel.send( new MessageEmbed()
    .setColor('#fa95b1')
    .setDescription(`wave.`)
    .setImage(client.images.wave())
    .setFooter(`Action Commands | \©️${new Date().getFullYear()} Kei`)
    )
  }
}
