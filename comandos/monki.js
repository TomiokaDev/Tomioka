const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
var monki = message.member.voice.channel;
if(!monki) return message.channel.send("No estas en un canal de voz");
const permissions = monki.permissionsFor(message.client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

     let audiom = ['./audio/monki.mp3', './audio/monkiflip.mp3']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];

try {
if(monki){

const connection = await message.member.voice.channel.join();
const dispatcher = connection.play(random);

dispatcher.on('start', () => {
     const embed = new Discord.MessageEmbed()
    .setTitle("MONKI")
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/760950452124123166/monkiswim.gif")
    .setColor(config.color)
    .setFooter(`Comando secreto! 2/4`, message.author.avatarURL())
    return message.channel.send({ embed : embed });
});

dispatcher.on('finish', () => {
        monki.leave();
});

}
} catch (error) {
console.log(error);
return message.channel.send("Hubo un error al meterse al canal. " + error);
}
}
module.exports.config = {
command:"monki",
aliases:["monki"],
cooldown: 90
}