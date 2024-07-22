const Topgg = require("@top-gg/sdk");
const express = require("express");
const app = express();
const { ShardingManager } = require('discord.js');
const config = require('./config.json');
const manager = new ShardingManager('./index.js', { token: config.discordtoken, totalShards: 'auto' });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

const webhook = new Topgg.Webhook(config.dbltoken);

app.post("/dblwebhook", webhook.middleware(), (req, res) => {
  //req.vote wil lbe your vote object, e.g
  console.log(req.vote.user); // 395526710101278721 < user who voted
});

app.listen(9068, "ip-172-31-11-80", () => { // setting port for existing server
   console.log('Https listening'); // Now socket and server both listens to same port
});