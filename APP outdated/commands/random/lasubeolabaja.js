const Discord = require('discord.js');

module.exports = {
	name: 'lasubeolabaja',
	description: 'el nombre lo dice todo',
	aliases: ['labajaolasube'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {


		let posibles = ["La baja", "La re baja man", "La sube", "La re sube amigo"]
		let rd = Math.floor(Math.random() * posibles.length)
		let respuesta = posibles[rd]
		return message.channel.send(`${respuesta}`);

	},
};
