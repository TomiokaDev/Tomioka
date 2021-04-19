const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
var toyota = message.member.voice.channel;
if(!toyota) return message.channel.send("No estas en un canal de voz");
const permissions = toyota.permissionsFor(message.client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

     let audiom = ['./audio/toyota.mp3']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];

try {
if(toyota){

const connection = await message.member.voice.channel.join();
const dispatcher = connection.play(random);

dispatcher.on('start', () => {
     const embed = new Discord.MessageEmbed()
    .setTitle("T O Y O T A")
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/832307332180475904/toyota.gif")
    .setColor(config.color)
    .setFooter(`Comando secreto! 6/6`, message.author.avatarURL())
    return message.channel.send({ embed : embed });
});

dispatcher.on('finish', () => {
        toyota.leave();
});

}
} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al intentar meterme al canal D: \n> **Error:** " + err); // estoo
}
}
module.exports.config = {
command:"toyota",
aliases:["toyota"],
cooldown: 90
}