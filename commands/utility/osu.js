const Discord = require('discord.js')
const osu = require('node-osu');
//PUT YOUR OSU API KEY INSIDE THE QUOTATION MARKS
const api = new osu.Api("5f86fdafaabe4ef39926ee470e525d87800e544f" , {
// END OF OSU API KEY
    notFoundAsError: true,
    completeScores: false 
})

module.exports = {
  name: "osu",
  category: "utility",
  group: "utility",
description: "Gets info about a user from Osu!",
usage: "[command | username]",
run: async (bot, message, args) => {
//command

let username = args[0]
  
  
if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (osu!)')

api.getUser({u: username}).then(user => {
const osu = new Discord.MessageEmbed()
.setTitle('User Osu Search System')
.setThumbnail(`http://s.ppy.sh/a/${user.id}}`)
.setColor("#D0436A")
.addField('Nickname', user.name)
.addField('PP', Math.round(user.pp.raw))
.addField('Rank', user.pp.rank)
.addField('Level', Math.round(user.level))
.addField('Country', user.country)
.addField('Country Rank', user.pp.countryRank)
.addField('Playcount', user.counts.plays)
.addField('Accuracy', `${user.accuracyFormatted}`)
.setFooter(`Osu | \©️${new Date().getFullYear()} Kei`);
message.channel.send(osu)

})

}
};