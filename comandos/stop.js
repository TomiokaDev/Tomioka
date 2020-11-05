const Discord = require('discord.js');
const config = require('../config.js');
const ytdl = require('ytdl-core');

module.exports = async(client, message, args) => {
if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;
let serverQueue = client.queue.get(message.guild.id);
if (!message.member.voice.channel)
    return message.channel.send(
      "Necesitas estar en un canal para parar la musica!"
);
let vc = message.member.voice.channel;
if(!serverQueue) {
return message.channel.send("No hay ninguna canción reproduciendose")
}else{
            let queueConst = {
                textChannel: message.channel,
                voiceChannel: vc.channel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
  if(serverQueue) client.queue.delete(message.guild.id);
  return message.channel.send("Ok!")
  message.member.voice.channel.leave();
}
}
module.exports.config = {
command:"stop",
aliases:["stop"],
cooldown: 5
}