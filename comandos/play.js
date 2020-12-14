const Discord = require('discord.js');
const config = require('../config.js');
const ytdl = require('ytdl-core');

module.exports = async(client, message, args) => {
if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;

if(!args[0]) return message.channel.send("Necesitas poner un link de YouTube");
let url = args.join(" ");
if(!url.match(/(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/)) return message.channel.send("Por favor pon un link de YouTube!");

 let serverQueue = client.queue.get(message.guild.id);
 let vc = message.member.voice.channel;
  if (!vc)
    return message.channel.send(
      "No estás en un canal de voz"
    );
  const permissions = vc.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "Necesito permisos para hablar o conectarme!"
    );
  }

        let songInfo = await ytdl.getInfo(url);
        let song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url
        }
  if (!serverQueue) {
    const queueConst = {
      textChannel: message.channel,
      voiceChannel: vc.channel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    client.queue.set(message.guild.id, queueConst);

    queueConst.songs.push(song);

    try {
      var connection = await vc.join();
      queueConst.connection = connection;
      play(message.guild, queueConst.songs[0], client, message, {filter: "audioonly"});
    } catch (err) {
      console.log(err);
      client.queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} fue añadido a la cola!`);
  }



function play(guild, song) {
  const serverQueue = client.queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    client.queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Reproduciendo: **${song.title}**`);
}


}
module.exports.config = {
command:"play",
aliases:["play"],
cooldown: 5
}
