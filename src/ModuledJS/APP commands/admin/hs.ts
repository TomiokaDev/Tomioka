//import Discord = require('discord.js');
const Discord = require("discord.js")
const config = require('./../../APP config/config.json')

module.exports = {
	name: 'hs',
	description: 'ｈｏｔ ｓｅｘ',
	aliases: ['hotsex'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {
          
if(!["624411964931571722","678756451581427743", "178651985015209984", "720756649878487112"].includes(message.guild.id)) return;
var fc = message.member.voice.channel;
if(!fc) return message.channel.send("No estas en un canal de voz");
const permissions = fc.permissionsFor(message.client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

     let audiom = ['./audio/hotsex.m4a']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];

if(fc){

const connection = await message.member.voice.channel.join();
const dispatcher = connection.play(random);

dispatcher.on('start', () => {
     const embed = new Discord.MessageEmbed()
    .setTitle("ｈｏｔ ｓｅｘ")
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/772219335791607848/hotsex.jpg")
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

