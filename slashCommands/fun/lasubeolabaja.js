const Discord = require('discord.js');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
module.exports = {
	name: 'lasubeolabaja',
	description: 'el nombre lo dice todo',
	guildOnly: true,
	cooldown: 5,
	run: (client, interaction) => {
 let posibles = ["La baja", "La re baja man", "La sube", "La re sube amigo"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 return interaction.reply(`${respuesta}`);
},
};
