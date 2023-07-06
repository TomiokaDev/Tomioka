const Discord = require('discord.js');
const { PermissionFlagsBits } = require('discord.js')
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const config = require('../../config.json');

module.exports = {
	name: 'amogus',
	description: 'SUS',
	aliases: ['sus', 'sussy'],
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

//Cargar audio

//conectar al canal de voz
const player = createAudioPlayer();
const audio = createAudioResource('../../audio/amogus.mp3');
const subscription = connection.subscribe(player);
player.play(audio);

     player.on(AudioPlayerStatus.Playing, () => {
          const embed = new Discord.EmbedBuilder()
          .setTitle("SUS")
          .setImage("https://cdn.discordapp.com/attachments/671170382010515466/831525001235529728/cover5.jpg")
          .setColor(config.color)
          .setFooter({text: `Comando secreto! 5/6`, iconURL: interaction.member.user.avatarURL()})
          return interaction.reply({ embeds : [embed] });
     });
     //Desconectarse luego de terminar de reproducir
     player.on(AudioPlayerStatus.Idle, () => {
          player.stop();
          connection.destroy();
     });
     player.on('error', error => {
	     console.error(error);
     });
}
}

