const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "setvouch",
  group: "social",
  aliases: ["setvouchchannel", "sv"],
  description: "Set the vouch channel",
  category: "config",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`You don't have permission | require : Adminsitrator!`);
    }

    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(`${args[0]}`).name ||
      message.guild.channels.cache.find(x => x.name === `${args.join(" ")}`) ||
      message.channel;

    if (channel.type === "voice") {
      return message.channel.send(`Please give me valid text channel not voice channel!`);
    }

    db.set(`vouch_${message.guild.id}`, channel.id);
    message.channel.send(
      new MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Vouch channel has been set.`)
        .setDescription(
          `Vouch channel is now: ${channel.name}`
        )
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}, copyright Owner vouch bot`)
    );
  }
}
