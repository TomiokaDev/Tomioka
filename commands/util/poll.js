//TomiokaBot
//By @SupahFox
//Description: Encuesta

const Discord = require('discord.js');
const { ApplicationCommandType, 
        EmbedBuilder, 
        ButtonBuilder,
        ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'poll',
    description: 'Encuesta',
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
        //Utilizar embed y botones
        let pregunta = interaction.options.get('pregunta').value;
        if (!pregunta) return interaction.reply("debes preguntarme algo.");
        //Embed
        const embed = new EmbedBuilder()
            .setColor(config.color)
            .setTitle('Encuesta')
            .setDescription(pregunta)
            .setTimestamp()
            .setFooter(`Preguntado por ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }));
        //Botones
        const button1 = new ButtonBuilder()
            .setCustomId('si')
            .setLabel('Si')
            .setStyle('SUCCESS');
        const button2 = new ButtonBuilder()
            .setCustomId('no')
            .setLabel('No')
            .setStyle('DANGER');
        
        const row = new ActionRowBuilder()
            .addComponents(button1, button2);
        interaction.reply({ embeds: [embed], components: [row] });
    }
};