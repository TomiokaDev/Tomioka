//TomiokaBot
//By @SupahFox
//Description: Generador de Texto por AI

//Usar dynamic import para importar el módulo
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const fs = require('fs');
require('dotenv').config()
const wait = require('node:timers/promises').setTimeout;
//module exports en es6
module.exports = {
    name: 'chatgpt',
    description: 'Generador de Texto por AI',
    guildOnly: true,
	cooldown: 5,
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'texto',
            description: 'Escribe cualquier cosa',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client, interaction, args) => {
        const { ChatGPTUnofficialProxyAPI } = await import('chatgpt')
        //Pedir el texto en interaction
        let texto = interaction.options.get('texto').value;

        //Si no hay texto, enviar error
        if (!texto) return interaction.reply({ content: 'Debes escribir algo.', ephemeral: true });

        //Si hay texto, enviarlo a la API
        const api = new ChatGPTUnofficialProxyAPI({
            accessToken: process.env.OPENAI_ACCESS_TOKEN,
            apiReverseProxyUrl: 'https://ai.fakeopen.com/api/conversation'
          })

        const res = await api.sendMessage(texto);

        //Si hay respuesta, enviarla
        interaction.reply('Contactando con el servicio de ChatGPT');

        await wait(10000);

        if (res) {
            const embed = new EmbedBuilder()
                .setTitle('ChatGPT')
                .setDescription(res)
                .setColor('RANDOM')
                .setFooter('Powered by ChatGPT')
                .setTimestamp();

            await interaction.edit({ embeds: [embed], ephemeral:  true});
        }
    }
}
