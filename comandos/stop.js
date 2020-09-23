const Discord = require('discord.js');
const config = require('../config.js');
const ytdl = require('ytdl-core');

module.exports = async(client, message, args) => {
if(!["178651638209314816"].includes(message.author.id)) return;
if (!message.member.voice.channel)
    return message.channel.send(
      "Necesitas estar en un canal para parar la musica!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}
module.exports.config = {
command:"play",
aliases:["play"],
cooldown: 5
}
