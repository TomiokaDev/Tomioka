const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
	name: 'forums',
	description: "creates a forum channel",
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,

	run: async (client, interaction) => {
		interaction.reply('');
	}
};