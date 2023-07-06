const { Events, Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
	intents: [
    //Intent para verificar si un usuario está en un canal de voz
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
	],
});

const fs = require('fs');
const config = require('./config.json');
require('dotenv').config()

client.queue = new Map();
client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.buttons = new Collection();
client.prefix = config.prefix;

module.exports = client;


fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});

client.login(process.env.TOKEN)
