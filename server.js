const Topgg = require("@top-gg/sdk");
const express = require("express");
const app = express();
const config = require('./config.json');
const { ShardingManager } = require('discord.js');

	const manager = new ShardingManager('./index.js', {
	execArgv: ['--trace-warnings'],
	shardArgs: ['--ansi', '--color'],
	token: config.discordtoken,
  //totalShards: 15,
  totalShards: 'auto',
  respawn: true
});


manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

const webhook = new Topgg.Webhook(config.dbltoken);

app.post("/dblwebhook", webhook.middleware(), (req, res) => {
  //req.vote wil lbe your vote object, e.g
  console.log(req.vote.user); // 395526710101278721 < user who voted
});

const constant = require('./node_modules/discord.js/src/util/Constants.js')
//constant.DefaultOptions.ws.properties.$browser = `Discord iOS`

app.listen(9068, "tomioka", () => { // setting port for existing server
   console.log('Https listening'); // Now socket and server both listens to same port
});
