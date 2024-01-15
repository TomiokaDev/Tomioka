//TomiokaBot
//By @SupahFox
//Description: Amogus command

// @ts-expect-error TS(6200): Definitions of the following identifiers conflict ... Remove this comment to see the full error message
const Discord = require('discord.js');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const { PermissionFlagsBits } = require('discord.js')
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'joinVoiceC... Remove this comment to see the full error message
const { joinVoiceChannel, createAudioPlayer, createAudioResource, StreamType,  VoiceConnectionStatus, AudioPlayerStatus } = require('@discordjs/voice');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const { createReadStream } = require('node:fs');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const { join } = require('node:path');
const player = createAudioPlayer();
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
	name: 'amogus',
	description: 'SUS',
	aliases: ['sus', 'sussy'],
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
// @ts-expect-error TS(2304): Cannot find name '__dirname'.
let audio = createAudioResource(join(__dirname, '../../audio/amogus.mp3'), { 
     inlineVolume: true 
});
audio.volume.setVolume(0.5);

player.play(audio);

const subscription = connection.subscribe(player);

     
     const embed = new Discord.EmbedBuilder()
     .setTitle("SUS")
     .setImage("https://cdn.discordapp.com/attachments/671170382010515466/831525001235529728/cover5.jpg")
     .setColor(config.color)
     .setFooter({text: `Ejecutado por ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL()})
     await interaction.reply({ embeds : [embed] });
     
     //Desconectarse luego de terminar de reproducir el audio 
     player.on(AudioPlayerStatus.Idle, () => {
          connection.destroy();
     });
     
     player.on('error', error => {
// @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
	     console.error('Error:', error.message);
          connection.destroy();
     });
} catch (error) {
     // @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
     console.log(error);
     
}
}
}
