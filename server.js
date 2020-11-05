const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'NTMxNDA4MDY3OTkzMTQxMjQ4.XDHOVA.VMAmNN4PvgD2XWnXW3gAoUdp9gQ', totalShards: 8 });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));