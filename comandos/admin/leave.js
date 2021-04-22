const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'leave',
	description: 'Comando para irse de un canal',
	aliases: ['leavech'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;

let serverQueue = message.client.queue.get(message.guild.id);
let vc = message.member.voice.channel;
if(!vc) return message.channel.send("No estas en un canal de voz");

if(serverQueue){
if(vc){
message.client.queue.delete(message.guild.id);
message.member.voice.channel.leave();
return message.channel.send("Bye!");
}
}

if(!serverQueue){
if(vc){
message.client.queue.delete(message.guild.id);
message.member.voice.channel.leave();
return message.channel.send("Bye!");
}
}


},
};