//TomiokaBot
//By @SupahFox
//Description: 8ball

const Discord = require('discord.js');
const { ApplicationCommandType, 
        EmbedBuilder, 
        ApplicationCommandOptionType } = require('discord.js');
const config = require('../../config.json');

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