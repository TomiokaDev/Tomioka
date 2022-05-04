module.exports = {
	name: 'volume',
	description: 'Skipea una canción.',
	aliases: ['vol', 'volumen'],
	guildOnly: true,
	cooldown: 5,
	args: true,
	usage: '<(1-100)%>',
	voiceOnly: true,
	async execute(message, args) {

		message.client.distube.setVolume(message, args[0]);
		if(args >= 1000){
			message.channel.send(`Volumen cambiado a ${args}%! EARRAPE ACTIVADO :speaker:`);
		}else{
		message.channel.send(`Volumen cambiado a ${args}%! :speaker:`);
		}
	},
};
