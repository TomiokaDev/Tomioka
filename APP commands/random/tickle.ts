/* eslint-disable no-inline-comments */
/* eslint-disable no-unused-vars */
import Discord = require('discord.js');
import fetch = require('node-fetch');
import fox = require('nekos.life');
const config = require('../../APP config/config.json');

module.exports = {
	name: 'tickle',
	description: 'Comando para hacer cosquillas',
	aliases: ['tck'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

		const member = message.mentions.users.first() || message.guild.members.cache.get(args.join(' '));

		if (member === message.author) return message.channel.send('Mmmmm creo que no es lo mismo que hacerle cosquillas a alguien'); // estoo
		if (member === message.client.user) return message.channel.send(`**${message.member.displayName}**, AJAJAJAJAJAJAJAJAJAA >.<`); // estoo

		const tickle = await neko.sfw.tickle();

		return message.channel.send({
			embed: {
				description: member
					? `**${message.member.displayName}** le hace cosquillas a **${member.username}**!`
					: `**${message.member.displayName}** Debes mencionar a alguien, que no sea a mi por que soy sensible a las cosquillas o///o`,
				image: {
					url: member
						? tickle.url
						: 'http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif',
				},
				color: message.guild ? message.guild.me.displayColor : '#00e059',
			},
		});

	},
};