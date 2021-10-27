const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
	name: 'cat',
	description: 'Comando para mostrar gatos!',
	aliases: ['gatitos', 'gato'],
	guildOnly: true,
	cooldown: 5,
	async execute(message) {
		const gatito = await neko.sfw.meow();


		const embed = new Discord.MessageEmbed()
			.setTitle('Gatitoooo uwu')
			.setColor(config.color)
			.setImage(gatito.url)
			.setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
		message.channel.send({ embed: embed });

	},
};
