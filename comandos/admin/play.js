const Discord = require('discord.js');
const config = require('../../config.json');
const ytdl = require('ytdl-core');
const scdl = require("soundcloud-downloader");
const YouTubeAPI = require("simple-youtube-api");

var SpotifyWebApi = require('spotify-web-api-node');
 
// credentials are optional
//var spotifyApi = new SpotifyWebApi({
//  clientId: config.spotifyclient,
//  clientSecret: config.spotifysecret,
//  redirectUri: 'http://www.example.com/callback'
//});


module.exports = {
	name: 'play',
	description: 'Comando experimental para reproducir música',
	aliases: ['p'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {
    
if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;

if(!args[0]) return message.channel.send("Escribe el nombre de la canción o pon un link de YouTube!");

YTAPI = config.youtubeapi;
//SCID = config.SCID;
const youtube = new YouTubeAPI(YTAPI);

let MAX_PLAYLIST_SIZE = 10;

const search = args.join(" ");
const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
const playlistPattern = /^.*(list=)([^#\&\?]*).*/gi;
const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;
const url = args[0];
const urlValid = videoPattern.test(args[0]);

 let serverQueue = message.client.queue.get(message.guild.id);
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

//PLAYLIST YT
//    if (!videoPattern.test(url) && playlistPattern.test(url)) {
//    try {
//      playlist = await youtube.getPlaylist(url, { part: "snippet" });
//      videos = await playlist.getVideos(MAX_PLAYLIST_SIZE || 10, { part: "snippet" });
//
//     videos.forEach((videopl) => {
//      let plInfo = ytdl.getInfo(url);
//      let videopl = {
//        title: plInfo.videoDetails.title,
//        url: plInfo.videoDetails.video_url,
//        duration: plInfo.videoDetails.lengthSeconds
//      }
//    })
//    } catch (error) {
//      console.error(error);
//      return message.reply("Playlist no encontrada.").catch(console.error);
//    }
//  } else if (scdl.isValidUrl(url) && url.includes("/sets/")) {
//    return message.client.comandos.get("playlist").execute(message, args);
//  }

if(!videoPattern.test(url) && playlistPattern.test(url)){
message.channel.send("No es posible agregar playlists por el momento.")
return;
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
        return message.reply("Ningún video fue encontrado con ese título.").catch(console.error);
      }
}

//if (scRegex.test(url)) {
//      try {
//        const trackInfo = await scdl.getInfo(url, SCID);
//        song = {
//          title: trackInfo.title,
//          url: trackInfo.permalink_url,
//          duration: Math.ceil(trackInfo.duration / 1000)
//        };
//      } catch (error) {
//        if (error.statusCode === 404)
//          return message.reply("No se pudo encontrar esa pista de Soundcloud.").catch(console.error);
//        return message.reply("Hubo un error al reproducir esa pista de Soundcloud.").catch(console.error);
//      }

if (scRegex.test(url)) {
message.channel.send("No es posible agregar links de Soundcloud por el momento.")
return;
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

    message.client.queue.set(message.guild.id, queueConst);

    queueConst.songs.push(song);

    try {
      var connection = await vc.join();
      queueConst.connection = connection;
      play(message.guild, queueConst.songs[0], message, {filter: "audioonly"});
    } catch (err) {
      console.log(err);
      message.client.queue.delete(message.guild.id);
      return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`**${song.title}** fue añadido a la cola!`);
  }



function play(guild, song) {
  const serverQueue = message.client.queue.get(guild.id);
  if (!song) {
    message.member.voice.channel.leave();
    message.client.queue.delete(guild.id);
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


},
};