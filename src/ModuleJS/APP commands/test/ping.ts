/* eslint-disable no-unused-vars */
//import Discord = require('discord.js');
const Discord = require("discord.js")
module.exports = {
	name: 'ping',
	description: 'Ping!',
	aliases: ['ping1', 'ping2'],
	guildOnly: true,
	cooldown: 5,
	multiLanguage: true,
	execute(message, args, language) {
		const embed = new Discord.MessageEmbed()
			.setDescription('[language.commands.ping.yes](https://www.youtube.com/watch?v=RO9gQB1xYVo)');
		message.channel.send(embed);
	},
};
