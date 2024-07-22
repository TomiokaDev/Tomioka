//TomiokaBot
//By @SupahFox
//Description: MMMMMMMMMMMMMMMMMMM PIIIII PIIIII PIIIII

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  name: 'microwave',
  description: 'MMMMMMMMMMMMMMMMMMM PIIIII PIIIII PIIIII',
  guildOnly: true,
  cooldown: 5,
  run: (client, interaction) => {

    const embed = new EmbedBuilder()
      .setTitle("mmmmmmmmm")
      .setImage("https://cdn.discordapp.com/attachments/671170382010515466/719736719175450715/2551979Sin_t_tulo2_830d8c863fe442d282671647fc19a389.jpg")
      .setColor(config.color)
    interaction.reply({ embeds: [embed] })

  },
};
