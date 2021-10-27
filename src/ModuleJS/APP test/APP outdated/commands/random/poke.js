/* eslint-disable no-inline-comments */
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../../config.json');

module.exports = {
	name: 'poke',
	description: 'Comando para molestar a alguien',
	aliases: ['poke1'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

		const member = message.mentions.users.first() || message.guild.members.cache.get(args.join(' '));

		if (member === message.author) return message.channel.send('¿Como te pokearias a ti mismo?'); // estoo
		if (member === message.client.user) return message.channel.send(`**${message.member.displayName}**, Hola si, de que me perdi?`); // estoo

		const pokeFetch = await fetch('https://nekos.life/api/v2/img/poke'),
			pokeImg = await pokeFetch.json();

		return message.channel.send({
			embed: {
				description: member
					? `**${message.member.displayName}** pokeó a **${member.username}**!`
					: `**${message.member.displayName}** Debes mencionar a alguien, que no sea yo owo`,
				image: {
					url: member
						? pokeImg.url
						: 'http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif',
				},
				color: message.guild ? message.guild.me.displayColor : '#00e059',
			},
		});

	},
};