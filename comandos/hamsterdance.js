const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
var monki = message.member.voice.channel;
if(!monki) return message.channel.send("No estas en un canal de voz");
const permissions = monki.permissionsFor(message.client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

     let audiom = ['./audio/catdancing.mp3']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];

try {
if(monki){

const connection = await message.member.voice.channel.join();
const dispatcher = connection.play(random);

dispatcher.on('start', () => {
     const embed = new Discord.MessageEmbed()
    .setTitle("FUNNY CAT HAHA LOL")
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/766873710073610240/cat.gif")
    .setColor(config.color)
    .setFooter(`Comando secreto! 3/6`, message.author.avatarURL())
    return message.channel.send({ embed : embed });
});

dispatcher.on('finish', () => {
        monki.leave();
});

}
} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al intentar meterme al canal D: \n> **Error:** " + err); // estoo
}
}
module.exports.config = {
command:"hamsterdance",
aliases:["hamsterdance"],
cooldown: 90
}