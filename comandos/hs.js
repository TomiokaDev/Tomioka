const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
if(!["624411964931571722","678756451581427743"].includes(message.guild.id)) return;
var fc = message.member.voice.channel;
if(!fc) return message.channel.send("No estas en un canal de voz");
const permissions = fc.permissionsFor(message.client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

     let audiom = ['./audio/hotsex.mp3']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];

try {
if(fc){

const connection = await message.member.voice.channel.join();
const dispatcher = connection.play(random);

dispatcher.on('start', () => {
     const embed = new Discord.MessageEmbed()
    .setTitle("HOT SEX")
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/772219335791607848/hotsex.jpg")
    .setColor(config.color)
    .setFooter(`Comando exclusivo xd`, message.author.avatarURL())
    return message.channel.send({ embed : embed });
});

dispatcher.on('finish', () => {
        fc.leave();
});

}
} catch (error) {
console.log(error);
return message.channel.send("Hubo un error al meterse al canal. " + error);
}
}
module.exports.config = {
command:"hs",
aliases:["hs"],
cooldown: 5
}
