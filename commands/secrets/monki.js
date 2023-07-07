//TomiokaBot
//By @SupahFox
//Description: monki command

const Discord = require('discord.js');
const { PermissionFlagsBits } = require('discord.js')
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType,  VoiceConnectionStatus, AudioPlayerStatus } = require('@discordjs/voice');
const { createReadStream } = require('node:fs');
const { join } = require('node:path');
const player = createAudioPlayer();
const config = require('../../config.json');

module.exports = {
	name: 'monki',
	description: 'Comando secreto! 2/6',
	aliases: ['monkee', 'monke', 'mono', 'primate'],
	guildOnly: true,
	cooldown: 5,
	run: async(client, interaction) => {
     try{
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
               
               let audioarray = ['../../audio/monki.mp3', '../../audio/monkiflip.mp3']
    
               let random = audioarray[Math.floor(audioarray.length * Math.random())];

               //LA CONCHA PUTA DE TU MADRE CAMBIAN TODO EL PUTO TIEMPO LA API AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
               let audio = createAudioResource(join(__dirname, random), { 
                    inlineVolume: true 
               });
               audio.volume.setVolume(0.5);
            
               player.play(audio);
               
               const subscription = connection.subscribe(player);
   
   
     const embed = new Discord.EmbedBuilder()
          .setTitle("MONKI")
          .setImage("https://cdn.discordapp.com/attachments/671170382010515466/760950452124123166/monkiswim.gif")
          .setColor(config.color)
          .setFooter({text: `Comando secreto! 2/6`, iconURL: interaction.member.user.avatarURL()})
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
};
}
}