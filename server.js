const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'TOKEN', totalShards: 4 });

//INTENTS PRIVILEGIADOS
const { Client, Intents } = require('discord.js');
const myIntents = new Intents();
myIntents.add('GUILD_PRESENCES', 'GUILD_MEMBERS');
const client = new Client({ ws: { intents: myIntents } });

//INTENTS NO PRIVILEGIIADOS
const otherIntents = new Intents(Intents.NON_PRIVILEGED);
otherIntents.remove(['GUILDS', 'GUILD_MESSAGES']);

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
