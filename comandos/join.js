const Discord = require('discord.js');
const config = require('../config.js');
const ytdl = require('ytdl-core');

module.exports = async(client, message, channel, args) => {
if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;
let vc = message.member.voice.channel;
if(!vc) return message.channel.send("No estas en un canal de voz");
const permissions = vc.permissionsFor(message.client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

try {
if(vc){
message.member.voice.channel.join();
}
} catch (error) {
console.log(error);
return message.channel.send("Hubo un error al meterse al canal. " + error);
}
}
module.exports.config = {
command:"join",
aliases:["join"],
cooldown: 5
}