const Discord = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const config = require('../../config.json');

module.exports = {
	name: 'amogus',
	description: 'SUS',
	aliases: ['sus', 'sussy'],
	guildOnly: true,
	cooldown: 5,
	run: async (client, interaction) => {
          
var amogus = interaction.member.voice.channel;
if(!amogus) return interaction.reply("No estas en un canal de voz");
const permissions = amogus.permissionsFor(client.user);
if(!permissions.has("CONNECT") || !permissions.has("SPEAK")) return interaction.reply("No tengo permisos para hablar o conectarme!");

     let audiom = ['./audio/amogus.mp3']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];

if(amogus){

const connection = await joinVoiceChannel({
     channelId: interaction.member.voice.channelId,
     guildId: interaction.guild.id,
     adapterCreator: interaction.guild.voiceAdapterCreator,
});


//connection.playOpusPacket(random);
const subscription = connection.subscribe(random);
//dispatcher.on('start', () => {
     const embed = new Discord.EmbedBuilder()
    .setTitle("SUS")
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/831525001235529728/cover5.jpg")
    .setColor(config.color)
     .setFooter({text: `Comando secreto! 5/6`, iconURL: interaction.member.user.avatarURL()})
    return interaction.reply({ embeds : [embed] });
//});

//dispatcher.on('finish', () => {
//        amogus.leave();
//});
}
}
}
