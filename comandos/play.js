const Discord = require('discord.js');
const config = require('../config.js');
const ytdl = require('ytdl-core');

module.exports = async(client, message, args) => {
if(!["Tu id"].includes(message.author.id)) return;
var queue = new Map();
        if(!args[0]) return;
        let url = args.join(" ");
        if(!url.match(/(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/)) return message.channel.send("Por favor pon un link de YouTube!");

        let serverQueue = queue.get(message.guild.id);
        let vc = message.member.voice;

        if(!vc) return message.channel.send("No estas en un canal de voz");

        if(!vc.channel.permissionsFor(client.user).has('CONNECT') || !vc.channel.permissionsFor(client.user).has('SPEAK')) return message.channel.send("No tengo permisos para hablar o conectarme!");

        let songinfo = await ytdl.getInfo(url);
        let song = {
            title: songinfo.videoDetails.title,
            url: songinfo.videoDetails.video_url
        }

        if(!serverQueue) {
            let queueConst = {
                textChannel: message.channel,
                voiceChannel: vc.channel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            };

            queue.set(message.guild.id, queueConst);
            queueConst.songs.push(song);

            try {
                let connection = await vc.channel.join();
                queueConst.connection = connection
                playSong(message.guild, queueConst.songs[0])
            } catch (error) {
                console.log(error);
                queue.delete(message.guild.id);
                return message.channel.send("Hubo un error al reproducir el link. Error: " + error);
            }
        } else {
            serverQueue.songs.push(song);
            return message.channel.send(`${song.title} fue añadido a la cola!`)
        }
    }

/**
 * 
 * @param {Discord.Guild} guild 
 * @param {Object} song 
 */
async function playSong(guild, song) {
    let serverQueue = queue.get(guild.id);

    if(!song){
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url)).on('end', () => {
        serverQueue.songs.shift();
        playSong(guild, serverQueue.songs[0]);
 })
    .on('error', () => {console.log(error)})

    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}
module.exports.config = {
command:"play",
aliases:["play"],
cooldown: 5
}
