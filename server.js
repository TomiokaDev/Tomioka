const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'TOKEN', totalShards: 4 });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
