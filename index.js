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