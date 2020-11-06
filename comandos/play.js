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
        if(!vc) return message.channel.send("No estas en un canal de voz");
        const permissions = vc.permissionsFor(message.client.user);

        if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

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

            client.queue.set(message.guild.id, queueConst);
            queueConst.songs.push(song);

            try {
                let connection = await message.member.voice.channel.join();
                queueConst.connection = connection
                playSong(message.guild, queueConst.songs[0], client, message)
                return message.channel.send(`Reproduciendo **${song.title}**!`)
            } catch (error) {
                console.log(error);
                client.queue.delete(message.guild.id);
                return message.channel.send("Hubo un error al reproducir el link. Error: " + error);
            }
        } else {
            serverQueue.songs.push(song);
            return message.channel.send(`**${song.title}** fue añadido a la cola!`)
        }
    }

/**
 * 
 * @param {Discord.Guild} guild 
 * @param {Object} song 
 */
async function playSong(guild, song, client, message) {
    let serverQueue = client.queue.get(message.guild.id)

    if(!song){
        serverQueue.voiceChannel.leave();
        client.queue.delete(guild.id);
        return;
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url)).on('end', () => {
        serverQueue.songs.shift();
        playSong(guild, serverQueue.songs[0], client, message);
 })
    .on('error', () => {console.log(error)})

    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}
module.exports.config = {
command:"play",
aliases:["play"],
cooldown: 5
}
