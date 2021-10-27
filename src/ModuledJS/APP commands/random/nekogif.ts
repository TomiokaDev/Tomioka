//import Discord = require('discord.js');
//import fetch = require('node-fetch');
//import neko = require('nekos.life');;
const Discord = require("discord.js")
const fetch = require('node-fetch');
const neko = require('nekos.life');
const config = require('../../APP config/config.json');

module.exports = {
	name: 'nekogif',
	description: 'Comando para mostrar gifs de nekos',
	aliases: ['gifnekos'],
	guildOnly: true,
	cooldown: 5,
	async execute(message) {

		const nekosgif = await neko.sfw.nekoGif();


		const embed = new Discord.MessageEmbed()
			.setTitle('Nekos!')
			.setColor(config.color)
			.setImage(nekosgif.url)
			.setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
		message.channel.send({ embed: embed });

	},
};
