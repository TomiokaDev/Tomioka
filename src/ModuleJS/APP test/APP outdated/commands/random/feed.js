/* eslint-disable no-inline-comments */
const client = require('nekos.life');
const neko = new client();

module.exports = {
	name: 'feed',
	description: 'Comando para dar de comer',
	aliases: ['comer'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

		const member = message.mentions.users.first() || message.guild.members.cache.get(args.join(' '));

		if (member === message.author) return message.channel.send('Está rico no?'); // estoo
		if (member === message.client.user) return message.channel.send(`**${message.member.displayName}**, No gracias ya comí :3`); // estoo

		const feed = await neko.sfw.feed();

		return message.channel.send({
			embed: {
				description: member
					? `**${message.member.displayName}** le da de comer a **${member.username}**!`
					: `**${message.member.displayName}** Debes mencionar a alguien, que no sea yo porque ya comí owo`,
				image: {
					url: member
						? feed.url
						: 'http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif',
				},
				color: message.guild ? message.guild.me.displayColor : '#00e059',
			},
		});

	},
};