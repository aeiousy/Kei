const Discord = require("discord.js");

module.exports = {
  name: "members",
  aliases: ["mbs"],
  category: "Information",
  group: "utility",
  description: "Show Discord Server Members!",
  usage: "Members",
  run: async (client, message, args) => {

    const Online = message.guild.members.cache.filter(Mem => Mem.presence.status === "online"), Offline = await message.guild.members.cache.filter(Mem => Mem.presence.status === "offline"), Idle = await message.guild.members.cache.filter(Mem => Mem.presence.status === "idle"), Dnd = await message.guild.members.cache.filter(Mem => Mem.presence.status === "dnd");
    const Bots = await message.guild.members.cache.filter(Mem => Mem.user.bot), Humans = await message.guild.members.cache.filter(Mem => !Mem.user.bot), Players = await message.guild.members.cache.filter(Mem => Mem.presence.activities && Mem.presence.activities[0] && Mem.presence.activities[0].type === "PLAYING"), Websites = await message.guild.members.cache.filter(Mem => Mem.presence.clientStatus && Object.keys(Mem.presence.clientStatus).includes("web")), Desktop = await message.guild.members.cache.filter(Mem => Mem.presence.clientStatus && Object.keys(Mem.presence.clientStatus).includes("desktop")), Mobile = await message.guild.members.cache.filter(Mem => Mem.presence.clientStatus && Object.keys(Mem.presence.clientStatus).includes("mobile"));
    let SameTag = await message.guild.members.cache.map(Mem => Mem.user.discriminator), Fake = [], Original = [];

    for (let i = 0; i < SameTag.length; i++) {
      if (Fake.includes(SameTag[i])) await Original.push(SameTag[i]);
      await Fake.push(SameTag[i]);
    };

    SameTag = Original.length;

    const Embed = new Discord.MessageEmbed()
    .setColor("GREY")
    .setTitle("Members Count!")
    .setDescription(`Total - **${message.guild.memberCount}**`)
    .setFooter(`Members | \©️${new Date().getFullYear()} Kei`)
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
