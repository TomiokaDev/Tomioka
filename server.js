const Topgg = require("@top-gg/sdk");
const express = require("express");
const app = express();
const { ShardingManager } = require('discord.js');
const config = require('./config.js');
const manager = new ShardingManager('./bot.js', { token: config.discordtoken, totalShards: 8 });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

const webhook = new Topgg.Webhook(config.dbltoken);

app.post("/dblwebhook", webhook.middleware(), (req, res) => {
  // req.vote wil lbe your vote object, e.g
  console.log(req.vote.user); // 395526710101278721 < user who voted
});

app.listen(6969, "hostname", () => { // setting port for existing server
    console.log('Https listening'); // Now socket and server both listens to same port
});
