//TomiokaBot
//By @SupahFox
//Description: Preguntale al bot y el te responderá

const Discord = require('discord.js');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
module.exports = {
	name: 'ask',
	description: 'Preguntale al bot y el te responderá',
	guildOnly: true,
	cooldown: 5,
	type: ApplicationCommandType.ChatInput,
	options: [
	  {
		  name: 'pregunta',
		  description: 'pregunta',
		  type: ApplicationCommandOptionType.String,
		  required: true
	  }
  ],
run: (client, interaction) => {
 let pregunta = interaction.options.get('pregunta').value;
 let posibles = ["sí", "no"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 if(!pregunta) return interaction.reply("debes preguntarme algo.");
 interaction.reply("Yo creo que " + respuesta + ".")

 },
};