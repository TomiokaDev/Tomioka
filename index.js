const { ShardingManager } = require('discord.js');
const Topgg = require("@top-gg/sdk");
const express = require("express");
const app = express();
const config = require('./config.json');
require('dotenv').config()
const manager = new ShardingManager('./bot.js', { token: process.env.TOKEN, totalShards: 'auto' });
const webhook = new Topgg.Webhook(process.env.DBLTOKEN);
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();

app.post("/dblwebhook", webhook.middleware(), (req, res) => {
    //req.vote wil lbe your vote object, e.g
    console.log(req.vote.user); // 395526710101278721 < user who voted
  });
  
  app.listen(9068, "fabuz", () => { // setting port for existing server
     console.log('Https listening for top.gg'); // Now socket and server both listens to same port
  });
