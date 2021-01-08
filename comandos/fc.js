const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
var fc = message.member.voice.channel;
if(!fc) return message.channel.send("No estas en un canal de voz");
const permissions = fc.permissionsFor(message.client.user);
if(!["178651638209314816"].includes(message.author.id)) return;
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

     let audiom = ['./audio/fc.mp3']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];

try {
if(fc){

const connection = await message.member.voice.channel.join();
const dispatcher = connection.play(random);

dispatcher.on('start', () => {
     const embed = new Discord.MessageEmbed()
    .setTitle("ESTAS EN UN CUMPLE BOLUDÍN")
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/771911889152245790/fcgabito.gif")
    .setColor(config.color)
    .setFooter(`Comando exclusivo xd`, message.author.avatarURL())
    return message.channel.send({ embed : embed });
});

dispatcher.on('finish', () => {
        fc.leave();
});

}
} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al intentar meterme al canal D: \n> **Error:** " + err); // estoo
}
}
module.exports.config = {
command:"fc",
aliases:["fc"],
cooldown: 90
}
