const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
var cow = message.member.voice.channel;
if(!cow) return message.channel.send("No estas en un canal de voz");
const permissions = cow.permissionsFor(message.client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

     let audiom = ['./audio/poland.mp3']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];

try {
if(cow){

const connection = await message.member.voice.channel.join();
const dispatcher = connection.play(random);

dispatcher.on('start', () => {
     const embed = new Discord.MessageEmbed()
    .setTitle("Tylko jedno w głowie mam. Koksu pięć gram, odlecieć sam")
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/775845670287835186/tenor.gif")
    .setColor(config.color)
    .setFooter(`Comando secreto! 3/4`, message.author.avatarURL())
    return message.channel.send({ embed : embed });
});

dispatcher.on('finish', () => {
        cow.leave();
});

}
} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al intentar meterme al canal D: \n> **Error:** " + err); // estoo
}
}
module.exports.config = {
command:"cow",
aliases:["cow"],
cooldown: 90
}