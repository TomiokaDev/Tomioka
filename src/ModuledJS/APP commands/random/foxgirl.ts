import Discord = require('discord.js');
import neko = require('nekos.life');
const config = require('../../APP config/config.json');

module.exports = {
	name: 'foxgirl',
	description: 'Comando para mostar gifs de foxgirls',
	aliases: ['zorros'],
	guildOnly: true,
	cooldown: 5,
	async execute(message) {

		const foxgirl = await neko.sfw.foxGirl();


		const embed = new Discord.MessageEmbed()
			.setTitle('OwO')
			.setColor(config.color)
			.setImage(foxgirl.url)
			.setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
		message.channel.send({ embed: embed });
	},
};