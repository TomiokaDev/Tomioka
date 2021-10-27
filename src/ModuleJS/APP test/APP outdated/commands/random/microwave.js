const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'microwave',
	description: 'MMMMMMMMMMMMMMMMMMM PIIIII PIIIII PIIIII',
	aliases: ['microondas'],
	guildOnly: true,
	cooldown: 5,
	execute(message) {

		const embed = new Discord.MessageEmbed()
			.setTitle('mmmmmmmmm')
			.setImage('https://cdn.discordapp.com/attachments/671170382010515466/719736719175450715/2551979Sin_t_tulo2_830d8c863fe442d282671647fc19a389.jpg')
			.setColor(config.color);
		message.channel.send({ embed: embed });

	},
};
