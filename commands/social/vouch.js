const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "vouch",
  aliases: [],
  group: "social",
  description: "Vouch for the owner",
  category: "vouch",
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send(`Please Give me a reason on why you are vouching for the owner`);

    const vouchreason = args.join(" ");

    let vouch = await db.get(`vouch_${message.guild.id}`);
    if (vouch === null)
      return message.channel.send(`No vouch Channel Found!`);

    const vouchem = new MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`New vouch by <@${message.author.id}>`)
      .setDescription(`Reason for vouch: ${vouchreason} `)
      .setFooter(`user id: ${message.author.id}`)
      .setTimestamp();
message.guild.channels.cache.get(vouch)
.send(vouchem)
    message.channel.send("Thanks for vouching for the owner, If the owner is using the bot to scam please contact **YOUR DISCORD NAME/DISCORD** So we can black him/her from our database.");
}}
