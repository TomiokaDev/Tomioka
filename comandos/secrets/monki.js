const Discord = require('discord.js');
const config = require('../../config.json');
const { Client, Collection, Intents, Permissions } = require('discord.js');
const client = new Discord.Client({
	intents: [
		      Intents.FLAGS.GUILDS,
			  Intents.FLAGS.GUILD_MESSAGES,
			  Intents.FLAGS.DIRECT_MESSAGES,
			  Intents.FLAGS.GUILD_VOICE_STATES
			 ]
});


const {
  AudioPlayerStatus,
  createAudioPlayer,
  createAudioResource,
  joinVoiceChannel,
  getVoiceConnection,
  VoiceConnectionStatus, 
  entersState } = require('@discordjs/voice');

module.exports = {
	name: 'monki',
	description: 'Comando secreto! 2/6',
	aliases: ['monkee', 'monke', 'mono', 'primate', 'primategracioso', 'funnymonkee'],
	guildOnly: true,
	cooldown: 120,
	async execute(message, args) {

var compcanal = message.member.voice.channel;
if(!compcanal) return message.channel.send("No estas en un canal de voz");
const permissions = compcanal.permissionsFor(message.client.user);
if(!permissions.has((Permissions.FLAGS.CONNECT) || !permissions.has((Permissions.FLAGS.SPEAK)))) return message.channel.send("No tengo permisos para hablar o conectarme!");


     let audiom = ['./audio/monki.mp3', './audio/monkiflip.mp3', './audio/funnymonkee.m4a']
    
     let random = audiom[Math.floor(audiom.length * Math.random())];
     
     if(compcanal){

          const connection = joinVoiceChannel({
               channelId: message.member.voice.channel.id,
               guildId: message.guild.id,
               adapterCreator: message.guild.voiceAdapterCreator,
             });
     
     const vcconnection = getVoiceConnection(message.channel.guild.id);
     
           const player = createAudioPlayer();
           const resource = createAudioResource(random);
     
     await player.play(resource);
     connection.subscribe(player);
     
     connection.on(VoiceConnectionStatus.Ready, () => {
     const embed = new Discord.MessageEmbed()
    .setTitle("MONKI")
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/760950452124123166/monkiswim.gif")
    .setColor(config.color)
    .setFooter({text: `Comando secreto! 2/6`}, message.author.displayAvatarURL())
    return message.channel.send({ embeds : [embed] });
});

player.on('error', (error) => console.error(error));
player.on(AudioPlayerStatus.Idle, () => {
  connection.disconnect();
});

}

 },
};