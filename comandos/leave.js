const Discord = require('discord.js');
const config = require('../config.js');
const ytdl = require('ytdl-core');

module.exports = async(client, message, channel, guild, args) => {
if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;
try{
let serverQueue = client.queue.get(message.guild.id);
let vc = message.member.voice.channel;
if(!vc) return message.channel.send("No estas en un canal de voz");

if(serverQueue){
if(vc){
client.queue.delete(message.guild.id);
message.member.voice.channel.leave();
return message.channel.send("Bye!");
}
}

if(!serverQueue){
if(vc){
client.queue.delete(message.guild.id);
message.member.voice.channel.leave();
return message.channel.send("Bye!");
}
}


} catch (error) {
console.log(error);
return message.channel.send("Hubo un error al salir del canal. " + error);
}
}
module.exports.config = {
command:"leave",
aliases:["leave"],
cooldown: 5
}