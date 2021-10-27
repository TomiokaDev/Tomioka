import Discord = require('discord.js');
import neko = require('nekos.life');
const config = require('../../APP config/config.json');

module.exports = {
	name: 'neko',
	description: 'Comando para mostrar nekos',
	aliases: ['nekogirl'],
	guildOnly: true,
	cooldown: 5,
	async execute(message) {

		const nekos = await neko.sfw.neko();


		const embed = new Discord.MessageEmbed()
			.setTitle('Nekos!')
			.setColor(config.color)
			.setImage(nekos.url)
			.setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
		message.channel.send({ embed: embed });

	},
};
