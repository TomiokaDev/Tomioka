const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'amogus',
	description: 'SUS',
	aliases: ['sus', 'sussy'],
	guildOnly: true,
	cooldown: 120,
	async execute(message, args) {
          
var amogus = message.member.voice.channel;
if(!amogus) return message.channel.send("No estas en un canal de voz");
const permissions = amogus.permissionsFor(message.client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return message.channel.send("No tengo permisos para hablar o conectarme!");

     let audiom = ['./audio/amogus.mp3']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];

if(amogus){

const connection = await message.member.voice.channel.join();
const dispatcher = connection.play(random);

dispatcher.on('start', () => {
     const embed = new Discord.MessageEmbed()
    .setTitle("SUS")
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/831525001235529728/cover5.jpg")
    .setColor(config.color)
    .setFooter(`Comando secreto! 5/6`, message.author.avatarURL())
    return message.channel.send({ embed : embed });
});

dispatcher.on('finish', () => {
        amogus.leave();
});

}

 },
};