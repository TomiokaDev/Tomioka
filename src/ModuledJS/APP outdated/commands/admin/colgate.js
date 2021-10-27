const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'colgate',
	description: 'Comando pa el toño XDD',
	aliases: ['toño', 'colgateboy'],
	guildOnly: true,
	cooldown: 5,
	execute(message) {

		const colgate = ['https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d2/d22416ac2d89e040641ab36be8cf331006a1bcd5_full.jpg'];
		const random = colgate[Math.floor(colgate.length * Math.random())];
		if(['635285489376690209'].includes(message.guild.id)) {
			const embed = new Discord.MessageEmbed()
				.setDescription('Colgate :moyai:')
				.setImage(random)
				.setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
				.setColor(config.color);
			message.channel.send({ embed: embed });
		}
		else{
			return message.channel.send('error');
		}

	},
};

