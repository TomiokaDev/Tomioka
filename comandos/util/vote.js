const Discord = require('discord.js');

module.exports = {
	name: 'vote',
	description: 'Comando para votar al bot',
	aliases: ['votebot'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

 message.channel.send("Podés ``votar`` al bot entrando en el siguiente link (1 voto cada 12 horas) https://top.gg/bot/531408067993141248/vote")

},
};
