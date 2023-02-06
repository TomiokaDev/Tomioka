const Discord = require('discord.js');
const{ ChatGPTAPI } = require('chatgpt');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'chatgpt',
	description: 'Generador de Texto por AI',
	guildOnly: true,
	cooldown: 5,
  type: ApplicationCommandType.ChatInput,
  options: [
    {
        name: 'texto',
        description: 'Preguntale algo a la IA',
        type: ApplicationCommandOptionType.String,
        required: true
    }
],
run: async(client, interaction) => {

    const api = new ChatGPTAPI({
        apiKey: process.env.OPENAI_API_KEY
    })
 let say = interaction.options.get('texto').value;
 const res = await api.sendMessage(say)
 let owoify = await neko.OwOify({text: say});
 interaction.reply(res.text)
},
};
