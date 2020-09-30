const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
var monki = message.member.voice.channel;

try {
if(monki){

const connection = await message.member.voice.channel.join();
const dispatcher = connection.play('./audio/monki.mp3');

dispatcher.on('start', () => {
	return message.channel.send("MONKI");
});

dispatcher.on('finish', () => {
	return message.channel.send("Comando secreto! 2/2")
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
