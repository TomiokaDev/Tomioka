module.exports = {
	name: 'stop',
	description: 'Para una canción.',
	aliases: ['st', 'leave'],
	guildOnly: true,
	cooldown: 5,
	args: false,
	usage: '<canción> / <url>',
	voiceOnly: true,
	async execute(message, args) {
		const queue = message.client.distube.getQueue(message);
		if (!queue) return message.channel.send(`${message.client.emotes.error} | La queue esta vacia!`);
		message.client.distube.stop(message);
		message.channel.send(`${message.client.emotes.stop} | Canción parada.`);


	},
};
