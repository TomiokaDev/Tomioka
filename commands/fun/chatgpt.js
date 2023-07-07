//TomiokaBot
//By @SupahFox
//Description: Generador de Texto por AI

//Usar dynamic import para importar el módulo
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const fs = require('fs');
require('dotenv').config()
const wait = require('node:timers/promises').setTimeout;
const config = require('../../config.json');
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
        try{
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
        //Enviar mensaje de espera
        interaction.reply('Contactando con el servicio de ChatGPT...')
        const res = await api.sendMessage(texto);
        await wait(5000)
        interaction.deleteReply();

        //Si hay respuesta, enviarla
        if (res) {
            const embed = new EmbedBuilder()
                .setTitle('ChatGPT')
                .setDescription(res.text)
                .setColor(config.color)
                .setFooter({text: 'Powered by ChatGPT'})
            await interaction.reply({ embeds: [embed] });
        }
    }
    catch (error) {
        console.log(error);
        interaction.send('Ha ocurrido un error al ejecutar el comando.');
    }
}
}
