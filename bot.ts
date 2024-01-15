//TomiokaBot
//By @SupahFox @HathHub
//Description: Main file

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Collection... Remove this comment to see the full error message
const { Events, Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'joinVoiceC... Remove this comment to see the full error message
const { joinVoiceChannel } = require('@discordjs/voice');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const { generateDependencyReport } = require('@discordjs/voice');

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'client'.
const client = new Client({
  intents: [
    //Intent para verificar si un usuario está en un canal de voz
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
  ],
});

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'fs'.
const fs = require('fs');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('./config.json');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
require('dotenv').config()

client.queue = new Map();
client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.buttons = new Collection();
client.prefix = config.prefix;

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = client;


fs.readdirSync('./handlers').forEach((handler) => {
  // @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
  require(`./handlers/${handler}`)(client)
});

// @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
client.login(process.env.TOKEN)
//console.log(generateDependencyReport());
