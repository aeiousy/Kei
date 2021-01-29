const { MessageEmbed } = require('discord.js');
const text = require(`${process.cwd()}/util/string`);

module.exports = {
  name: 'support',
  aliases: [],
  guildOnly: true,
  group: 'bot',
  description: 'Support for Kei',
  clientPermissions: [ 'EMBED_LINKS' ],
  parameters: [ ],
  get examples(){ return [ this.name, ...this.aliases ]; },
  run: async (client, message) => {

    return message.channel.send(
      new MessageEmbed()
      .setColor('GREY')
      .setTitle('Support Kei and its Development!')
      .setDescription([
        'Kei is an open-source, but still a young and adolescent bot, not yet fully matured.',
        'As the bot progresses, Kei is bound to produce undesirable errors',
        'that interferes with her functions, and therefore strains functionality.',
        'It is good to hear that you\'re interested in supporting Kei, and there',
        'are various ways to do so..'
      ].join(' '))
      .addFields([
        {
          name: 'Join Her Support Server.',
          value: [
            `Join with ${message.client.guilds.cache.get('703922441768009731').memberCount}`,
            'other people and participate in Kei\'s support server from development to production,',
            'test bots, report bugs, or add feature requests, and be updated on what\'s to come.'
          ].join(' ')
        },{
          name: 'Contribute to Repository.',
          value: [
            'Found some bugs? Do you feel you can fix it yourself? Contribute to Kei\'s repository',
            '[here](https://github.com/Keisans-Keid/Kei) by creating an issue or making a reasonable',
            'pull request. While you\'re at it please follow SakurajiKei#6742 and/or add a star to',
            'the repository.'
          ].join(' ')
        },{
          name: 'Submit Forms.',
          value: [
            'Clearly, has too little to none amount of stored data that help serve its core functions.',
            'This includes the images for action commands, Kei\'s set of photos herself, and the waifus',
            'for the waifu command. You can submit your own data by going to https://Kei-san.ml/submissions',
            'and selecting the appropriate forms suited to your submission needs. Help is appreciated!'
          ].join(' ')
        },{
          name: 'Collaborate.',
          value: [
            'As of the moment, there are no dedicated collaborators for the production of Kei, and Keintaining',
            'the bot has been done solely by SakurajiKei#6742. This is the reason why some fix updates take',
            'longer than anticipated. If you are confident and active enough to help Keintain the code, you',
            'may [join](https://support.Kei-san.ml) my support server and contact `SakurajiKei#6742` from there.'
          ].join(' ')
        },{
          name: 'Vote Kei.',
          value: [
            'Kei is available both on [DiscordBotList](https://discordbotlist.com/bots/Kei-3909) and',
            '[Top.gg](https://top.gg/bot/702074452317307061). If you like this bot please vote and leave',
            'a review. Your review will be helpful when making changes to the bot. As of the moment,',
            'there are no rewards implemented for voting, but is subject to change.'
          ].join(' ')
        },
      ]).setFooter(`Support | \©️${new Date().getFullYear()} Kei`)
    )
  }
}
