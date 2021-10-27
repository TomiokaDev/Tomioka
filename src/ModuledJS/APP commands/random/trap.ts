/* eslint-disable no-unused-vars */
import db = require('megadb');
import Discord = require('discord.js');
import fetch = require('node-fetch');
const nsfwchannel = new db.crearDB('canales_nsfw');
const client = new Discord.Client();
import neko = require('nekos.life');
const config = require('../../APP config/config.json');

module.exports = {
	name: 'trap',
	description: 'Trapitos',
	aliases: ['trapitos'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

		const trap = await neko.nsfw.trap();

		const guild = message.guild;

		const canalnsfw = await nsfwchannel.get(`${message.guild.id}`);
		console.log(canalnsfw);
		// Operador ternario, nsfwChannel tiene la id del server ? si la tiene la variable es dicha id : no la tiene el valor de la variable es Null
		if(!canalnsfw) return message.channel.send('No hay ningun canal definido. Definelo con tk!setnsfw <#CANAL>');
		if(!message.channel.nsfw) return message.channel.send('Necesitas estar en un canal Nsfw para hacer eso, por favor ve a <#' + canalnsfw + '>');

		const embed = new Discord.MessageEmbed()
			.setTitle('Acá tenés trapitos!')
			.setColor(config.color)
			.setImage(trap.url)
			.setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
		message.channel.send({ embed: embed });

	},
};
