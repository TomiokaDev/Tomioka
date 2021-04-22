const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'join',
	description: 'Comando para unirse a un canal de voz',
	aliases: ['joinch'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;
let vc = message.member.voice.channel;
if(!vc) return message.channel.send("No estas en un canal de voz");
const permissions = vc.permissionsFor(message.client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");


if(vc){
message.member.voice.channel.join();
}

},
};