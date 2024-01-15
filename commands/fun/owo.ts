//TomiokaBot
//By @SupahFox
//Description: owo

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  name: 'owo',
  description: 'owo',
  guildOnly: true,
  cooldown: 5,
  type: ApplicationCommandType.ChatInput,
  run: (client, interaction) => {

    const embed = new EmbedBuilder()
      .setTitle("OwO")
      .setColor(config.color)
      .setImage("https://cdn.discordapp.com/attachments/671170382010515466/719633582812823592/5484184-owo-t-shirts-teepublic-uk-owo-png-313_313_preview.png")
      .setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
    interaction.reply({ embeds: [embed] })

  },
};  
