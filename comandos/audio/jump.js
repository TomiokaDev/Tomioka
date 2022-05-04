module.exports = {
	name: 'jump',
	description: 'Salta a una canción de la queue.',
	aliases: ['saltar'],
	guildOnly: true,
	cooldown: 5,
	args: true,
	usage: '<numero de queue>',
	voiceOnly: true,
	async execute(message, args) {
        if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;
		message.client.distube.jump(message, parseInt(args[0]))
			// eslint-disable-next-line no-unused-vars
			.catch(err => message.channel.send(`${message.client.emotes.error} | Numero de cancíon invalido`));
	},
};
