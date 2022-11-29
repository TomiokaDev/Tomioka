const Discord = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const config = require('../config.json');

module.exports = {
	name: 'cow',
	description: 'Comando secreto! 4/6',
	guildOnly: true,
	cooldown: 5,
	run: async (client, interaction) => {

var cow = message.member.voice.channel;
if(!cow) return message.channel.send("No estas en un canal de voz");
const permissions = cow.permissionsFor(message.client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

     let audiom = ['./audio/poland.mp3']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];

if(cow){

const connection = await message.member.voice.channel.join();
const dispatcher = connection.play(random);

dispatcher.on('start', () => {
     const embed = new Discord.MessageEmbed()
    .setTitle("Tylko jedno w głowie mam. Koksu pięć gram, odlecieć sam")
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/775845670287835186/tenor.gif")
    .setColor(config.color)
     .setFooter({text: `Comando secreto! 4/6`, iconURL: interaction.member.user.avatarURL()})
    return message.channel.send({ embed : embed });
});

dispatcher.on('finish', () => {
        cow.leave();
});
}
}
}
