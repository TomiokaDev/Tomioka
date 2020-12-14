const Discord = require('discord.js');
const config = require('../config.js');
const ytdl = require('ytdl-core');
const YouTubeAPI = require("simple-youtube-api");

module.exports = async(client, message, args) => {
if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;

if(!args[0]) return message.channel.send("Escribe el nombre la canción o pon un link de YouTube!");

YTAPI = config.youtubeapi;
const youtube = new YouTubeAPI(YTAPI);


const search = args.join(" ");
const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
const url = args[0];
const urlValid = videoPattern.test(args[0]);


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

if (urlValid) {
        let songInfo = await ytdl.getInfo(url);
        let song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.lengthSeconds
        }
}

if(search){
      try {
        const results = await youtube.searchVideos(search, 1);
        songInfo = await ytdl.getInfo(results[0].url);
        song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.lengthSeconds
        };
      } catch (error) {
        console.error(error);
        return message.reply("Ningun video fue encontrado con ese título").catch(console.error);
      }
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
    message.member.voice.channel.leave();
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
