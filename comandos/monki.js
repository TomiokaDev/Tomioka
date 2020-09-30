const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
var monki = message.member.voice.channel;
if(!monki) return message.channel.send("No estas en un canal de voz");
const permissions = monki.permissionsFor(message.client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

try {
if(monki){

const connection = await message.member.voice.channel.join();
const dispatcher = connection.play('./audio/monki.mp3');

dispatcher.on('start', () => {
	return message.channel.send("MONKI");
});

dispatcher.on('finish', () => {
	message.channel.send("Comando secreto! 2/2");
        monki.leave();
});

}
} catch (error) {
console.log(error);
return message.channel.send("Hubo un error al meterse al canal. " + error);
}
}
module.exports.config = {
command:"play",
aliases:["play"],
cooldown: 5
}
