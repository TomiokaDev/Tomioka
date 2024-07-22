//TomiokaBot
//By @SupahFox
//Description: Comando para que Goku diga que ta mal

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
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
