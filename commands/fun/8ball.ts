//TomiokaBot
//By @SupahFox
//Description: 8ball

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
const { ApplicationCommandType, 
        // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'EmbedBuild... Remove this comment to see the full error message
        EmbedBuilder, 
        // @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
        ApplicationCommandOptionType } = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
    name: '8ball',
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
        let posibles = ["sí", "no", "tal vez", "no sé", "quizás", "no creo", "por supuesto", "claro que no", "claro que sí", "no lo sé", "no estoy seguro", "en serio me preguntás eso?"];
        let rd = Math.floor(Math.random() * posibles.length);
        let respuesta = posibles[rd];
        if (!pregunta) return interaction.reply("debes preguntarme algo.");
        //Embed
        const embed = new EmbedBuilder()
            .setColor(config.color)
            .setTitle('8ball')
            .setDescription(respuesta + ".")
            .setTimestamp()
            .setFooter(`Preguntado por ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }));
        interaction.reply({ embeds: [embed] });
    }
};