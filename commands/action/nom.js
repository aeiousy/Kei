const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'nom'
  , aliases: []
  , guildOnly: true
  , clientPermissions: [
    'EMBED_LINKS',
    'ADD_REACTIONS'
  ]
  , group: 'action'
  , description: 'nom nom'
  , examples: [
      'nom'
  ]
  , parameters: []
  , run: async ( client, message, args ) => {

    return message.channel.send( new MessageEmbed()
    .setColor('#fa95b1')
    .setDescription(`nom nom`)
    .setImage(client.images.nom()))
    .setFooter(`Action Commands | \©️${new Date().getFullYear()} Kei`)
  }
}
