//TomiokaBot
//By @SupahFox
//Description: Generador de Texto por AI

//Usar dynamic import para importar el módulo
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'fs'.
const fs = require('fs');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
require('dotenv').config()
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const wait = require('node:timers/promises').setTimeout;
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');

//Para python
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const {spawn} = require('child_process');

//module exports en es6
// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
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
        try {
            await interaction.deferReply();
            const python = spawn('python3', ['python/openai.py']);

            var dataToSend; // Inicializar como una cadena vacía

            python.stdout.on('data', function(data) {
                dataToSend = data.toString(); // Concatenar los datos recibidos en lugar de reemplazarlos
            });
            
            python.stderr.on('data', (data) => {
                // @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
                console.error(`child stderr:\n${data}`);
            });

            python.on('exit', (code) => {
                // @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
                console.log('ChatGPT')
                // @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
                console.log(`child process close all stdio with code ${code}`);
            });

            //Obtener accessToken (No quiero pagar la API, manga de hdps)
            const { ChatGPTUnofficialProxyAPI } = await import('chatgpt')

            //Pedir el texto en interaction
            let texto = interaction.options.get('texto').value;

            //Si no hay texto, enviar error
            if (!texto) return interaction.reply({ content: 'Debes escribir algo.', ephemeral: true });

            await wait(5000);
            const api =  new ChatGPTUnofficialProxyAPI({
                accessToken: dataToSend,
                apiReverseProxyUrl: 'https://ai.fakeopen.com/api/conversation'
            })
            //Enviar el texto a la API
            const res = await api.sendMessage(texto);

            //Si hay respuesta, enviarla
            if (res) {
                //Crear embed
                const embed = new EmbedBuilder()
                    .setTitle('ChatGPT')
                    .setColor(config.color)
                    .setDescription(res.text)
                    .setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
                    .setTimestamp();
                await interaction.editReply({ embeds: [embed] });
            }

            if(!res) {
                await interaction.editReply({ content: 'Ha ocurrido un error al conectarse a la API de ChatGPT', ephemeral: true });
            }
        }
        catch (error) {
            // @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
            console.log(error);
            await interaction.editReply({ content: 'Ha ocurrido un error al ejecutar el comando.', ephemeral: true});
        }
    }
}
