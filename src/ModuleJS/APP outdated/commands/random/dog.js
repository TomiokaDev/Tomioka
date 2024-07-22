const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
	name: 'dog',
	description: 'Comando para mostrar perros',
	aliases: ['doggo', 'perritos'],
	guildOnly: true,
	cooldown: 5,
	async execute(message) {

		const woof = await neko.sfw.woof();


		const embed = new Discord.MessageEmbed()
			.setTitle('Perritos!')
			.setColor(config.color)
			.setImage(woof.url)
			.setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
		message.channel.send({ embed: embed });

	},
};
