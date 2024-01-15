//TomiokaBot
//By @SupahFox
//Description: Index and sharding file

// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const { ShardingManager } = require('discord.js');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const Topgg = require("@top-gg/sdk");
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const express = require("express");
const app = express();
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('./config.json');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
require('dotenv').config()
// @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
const manager = new ShardingManager('./bot.ts', { token: process.env.TOKEN, totalShards: 'auto' });
// @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
const webhook = new Topgg.Webhook(process.env.DBLTOKEN);
//manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();