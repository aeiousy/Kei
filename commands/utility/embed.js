const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "embed",
aliases: ["embedsay"],
category: "extra",
group: "utility",
usage: "embed <text to say>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`❌ | `+`You Require Manage Message`)
 await message.delete()
  let say = message.content.split(" ").slice(1).join(" ")
  if(!say) return message.channel.send(`❌ | `+"I Cannot Repeat Blank Message")
  let embed = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
  .setDescription(`${say}`)
  .setColor("GREY")
.setFooter(`${message.author.username}`)
.setTimestamp()
  message.channel.send(embed)
}
}
