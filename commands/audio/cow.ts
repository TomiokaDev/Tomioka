//TomiokaBot
//By @SupahFox
//Description: cow command

const Discord = require('discord.js');
const { PermissionFlagsBits } = require('discord.js')
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType,  VoiceConnectionStatus, AudioPlayerStatus } = require('@discordjs/voice');
const { createReadStream } = require('node:fs');
const { join } = require('node:path');
const player = createAudioPlayer();
const config = require('../../config.json');

module.exports = {
	name: 'cow',
	description: 'cow',
	aliases: ['polish', 'cowmeme'],
	guildOnly: true,
	cooldown: 5,
    run: async(client, interaction) => {
     try {
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
            let audio = createAudioResource(join(__dirname, '../../audio/poland.mp3'), { 
                 inlineVolume: true 
            });
            audio.volume.setVolume(0.5);
            
            player.play(audio);
            
            const subscription = connection.subscribe(player);


    const embed = new Discord.EmbedBuilder()
          .setTitle("Tylko jedno w głowie mam. Koksu pięć gram, odlecieć sam")
          .setImage("https://cdn.discordapp.com/attachments/671170382010515466/775845670287835186/tenor.gif")
          .setColor(config.color)
          .setFooter({text: `Ejecutado por ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL()})
    await interaction.reply({ embeds : [embed] });

     //Desconectarse luego de terminar de reproducir el audio 
     player.on(AudioPlayerStatus.Idle, () => {
          connection.destroy();
     });
   
   player.on('error', error => {
          console.error('Error:', error.message);
          connection.destroy();
   });
} catch (error) {
     console.log(error);
     interaction.reply('Ha ocurrido un error al ejecutar este comando.');
}
}
}
