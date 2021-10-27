/* eslint-disable no-inline-comments */
/* eslint-disable no-unused-vars */
//import Discord = require('discord.js');
//import fetch = require('node-fetch');
//import neko = require('nekos.life');;
const Discord = require("discord.js")
const fetch = require('node-fetch');
const neko = require('nekos.life');
const config = require('./../../APP config/config.json');

module.exports = {
	name: 'slap',
	description: 'Comando para pegarle una cachetada a alguien',
	aliases: ['slp'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

		const member = message.mentions.users.first() || message.guild.members.cache.get(args.join(' '));


		if (member === message.author) return message.channel.send('No est�s en un sue�o, est�s en la vida real :D'); // estoo
		if (member === message.client.user) return message.channel.send(`**${message.member.displayName}**, nooooo que me duele :(`); // estoo

		const slap = await neko.sfw.slap();

		return message.channel.send({
			embed: {
				description: member
					? `**${message.member.displayName}** le da una cachetada a **${member.username}**!`
					: `**${message.member.displayName}** Debes mencionar a alguien, que no sea yo por favor :((`,
				image: {
					url: member
						? slap.url
						: 'http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif',
				},
				color: message.guild ? message.guild.me.displayColor : '#00e059',
			},
		});

	},
};
