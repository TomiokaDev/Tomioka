//TomiokaBot
//By @SupahFox
//Description: "Convierte el texto a formato ASCII"

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const figlet = require('figlet');
// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  name: 'ascii',
  description: 'Convierte el texto a formato ASCII',
  aliases: ['asciitext', 'textoascii'],
  guildOnly: true,
  cooldown: 5,
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'texto',
      description: 'La ID de Steam',
      type: ApplicationCommandOptionType.String,
      required: true
    }
  ],
  run: (client, interaction) => {
    let say = interaction.options.get('texto').value;
    figlet(say, function (err, data) {
      if (err) {
        interaction.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err);
        // @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
        console.log(err);
        return;
      }

      if (data.length <= 2000) {
        // @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
        interaction.reply('```' + data + '```').catch(console.error);
      }

      else if (data.length > 2000) {
        // @ts-expect-error TS(2584): Cannot find name 'console'. Do you need to change ... Remove this comment to see the full error message
        interaction.reply('El API del ascii excede la cantidad de 2000 caracteres. Intentá poner algo más corto.').catch(console.error);
      }
    });

  },
};
