//TomiokaBot
//By @SupahFox
//Description: toyota command

const Discord = require('discord.js');
const { PermissionFlagsBits } = require('discord.js')
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType,  VoiceConnectionStatus, AudioPlayerStatus } = require('@discordjs/voice');
const { createReadStream } = require('node:fs');
const { join } = require('node:path');
const player = createAudioPlayer();
const config = require('../../config.json');

module.exports = {
	name: 'toyota',
	description: 'T O Y O T A',
	aliases: ['tyt'],
	guildOnly: true,
	cooldown: 5,
	run: async(client, interaction) => {
               //obtener canal de voz usando discord.js v14
               const voiceChannel = interaction.member.voice.channel;
               //obtener conexion de voz usando discord.js v14
               const connection = joinVoiceChannel({
                    channelId: voiceChannel.id,
                    guildId: voiceChannel.guild.id,
                    adapterCreator: voiceChannel.guild.voiceAdapterCreator,
               });
               
               //Comprobar permisos del bot
               if (!interaction.member.permissions.has(PermissionFlagsBits.CONNECT)) return interaction.reply('No tengo permisos para conectarme a ese canal de voz.');
               if (!interaction.member.permissions.has(PermissionFlagsBits.SPEAK)) return interaction.reply('No tengo permisos para hablar en ese canal de voz.');

               //LA CONCHA PUTA DE TU MADRE CAMBIAN TODO EL PUTO TIEMPO LA API AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
               let audio = createAudioResource(join(__dirname, '../../audio/toyota.mp3'), { 
                    inlineVolume: true 
               });
               audio.volume.setVolume(0.5);
            
               player.play(audio);
               
               const subscription = connection.subscribe(player);
   
   player.on(AudioPlayerStatus.Playing, (oldState, newState) => {
       const embed = new Discord.EmbedBuilder()
       .setTitle("T O Y O T A")
       .setImage("https://cdn.discordapp.com/attachments/671170382010515466/832307332180475904/toyota.gif")
       .setColor(config.color)
       .setFooter({text: `Comando secreto! 6/6`, iconURL: interaction.member.user.avatarURL()})
         return interaction.reply({ embeds : [embed] });
    });

     //Desconectarse luego de terminar de reproducir el audio 
     player.on(AudioPlayerStatus.Idle, () => {
        connection.destroy();
   });
   
   player.on('error', error => {
       console.error('Error:', error.message);
        connection.destroy();
   });
}
};
