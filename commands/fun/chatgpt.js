//TomiokaBot
//By @SupahFox
//Description: Generador de Texto por AI

//Usar dynamic import para importar el módulo

const { ChatGPTAPI } = import('chatgpt');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');

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
        //Pedir el texto en interaction
        let texto = interaction.options.get('texto').value;

        //Si no hay texto, enviar error
        if (!texto) return interaction.reply({ content: 'Debes escribir algo.', ephemeral: true });

        //Si hay texto, enviarlo a la API
        const chatgpt = new ChatGPTAPI(process.env.CHATGPT_TOKEN);
        const response = await chatgpt.getChat(texto);

        //Si hay respuesta, enviarla
        if (response) {
            const embed = new EmbedBuilder()
                .setTitle('ChatGPT')
                .setDescription(response)
                .setColor('RANDOM')
                .setFooter('Powered by ChatGPT')
                .setTimestamp();

            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle('LINK')
                        .setLabel('Ver en ChatGPT')
                        .setURL('https://chatgpt.com/')
                );

            interaction.reply({ embeds: [embed], components: [row] });
        }
    }
}
