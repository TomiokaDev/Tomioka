//import Discord = require('discord.js');
//import fetch = require('node-fetch');
const fetch = require('node-fetch');
const Discord = require("discord.js")
const config = require('../../APP config/config.json');

module.exports = {
	name: 'fox',
	description: 'Comando para mostar zorros',
	aliases: ['zorros'],
	guildOnly: true,
	cooldown: 5,
	async execute(message) {


		const fox = await fetch('https://randomfox.ca/floof/'),
			foximg = await fox.json();

		const embed = new Discord.MessageEmbed()
			.setTitle('Zorritos!')
			.setImage(foximg.image)
			.setColor(config.color)
			.setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
		return message.channel.send({ embed : embed });
	},
};
