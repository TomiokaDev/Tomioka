//import Discord = require('discord.js');
const Discord = require("discord.js")
const config = require('./../../APP config/config.json')

module.exports = {
	name: 'fc',
	description: 'feliz cumple puto de mierda',
	aliases: ['gabito', 'felizcumple'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

var fc = message.member.voice.channel;
if(!fc) return message.channel.send("No estas en un canal de voz");
const permissions = fc.permissionsFor(message.client.user);
let trusted = require("./../../APP config/trusted.json")
if(!trusted.accs.includes(message.author.id)) return;
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

     let audiom = ['./audio/fc.mp3']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];


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
  
 },
};