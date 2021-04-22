const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'skip',
	description: 'Comando para skipear una canción',
	aliases: ['s'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;
let serverQueue = message.client.queue.get(message.guild.id);
if (!message.member.voice.channel)
    return message.channel.send(
      "Necesitas estar en un canal para skipear la musica!"
);
let vc = message.member.voice.channel;
if(!serverQueue) {
return message.channel.send("No hay ninguna canción reproduciendose")
}else{
  serverQueue.connection.dispatcher.end();
  return message.channel.send("Skipeando!")
}

},
};
