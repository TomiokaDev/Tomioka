const { ShardingManager } = require('discord.js');
const config = require('./config.js');
const manager = new ShardingManager('./bot.js', { token: config.discordtoken, totalShards: 8 });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
