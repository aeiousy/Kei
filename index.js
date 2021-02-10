// load env file (contains important keys)
require('dotenv').config();
const Discord = require('discord.js');
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"

const fs = require('fs');

const Client = require(`${process.cwd()}/struct/Client`);
const config = require(`${process.cwd()}/config`);

const client = new Client(config);

const options = {
  bypass: true,
  log: true,
  paths: [
    'action', 'anime', 'bot',
    'core', 'fun', 'moderation', 'music',
    'owner', 'setup', 'social','utility', 'ticket'
  ]
};

client.database?.init();

client.musicPlayer?.init();

client.loadCommands({ parent: 'commands', ...options });

client.loadEvents({ parent: 'events', ...options });

client.defineCollections([ 'discovery', 'economy', 'memes', 'xp' ]);

// let client listen to process events, setting ignore to true will
// ignore errors and not execute the functions from util/processEvents.js.
// Available process events on https://nodejs.org/api/process.html#process_process_events
client.listentoProcessEvents([
  'unhandledRejection',
  'uncaughtException'
], { ignore: false });

client.login();

client.on("guildCreate", guild => {
    const channels = guild.channels.cache.filter(channel => channel.type == "text");

    channels.first().send("Hi there, I'm **Kei!** Thanks for adding me to your server. \n\n").catch(e => console.log(e));

    channels.first().send("Do `kei help` to get a list of commands, and `kei help <command>` to see more information about a command.").catch(e => console.log(e));

    channels.first().send("If you need help, or find a bug: Join our support server at https://discord.gg/uFTvyB22RX").catch(e => console.log(e));
});
