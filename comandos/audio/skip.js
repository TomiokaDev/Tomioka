module.exports = {
	name: 'skip',
	description: 'Skipea una canción.',
	aliases: ['s'],
	guildOnly: true,
	cooldown: 5,
	voiceOnly: true,
	async execute(message) {

		const queue = message.client.distube.getQueue(message);
		if (!queue) return message.channel.send(`${message.client.emotes.error} | La queue esta vacia!`).then(message => message.delete({timeout: 10000}));
		try {
			message.client.distube.skip(message);
			message.channel.send(`${message.client.emotes.success} | Skipeado a: \`${queue.songs[1].name}\``).then(message => message.delete({timeout: 10000}));
		}
		catch (e) {
			message.channel.send(`${message.client.emotes.error} | ${e}`);
		}
	},
};

