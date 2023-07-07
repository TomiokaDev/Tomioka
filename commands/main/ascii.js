//TomiokaBot
//By @SupahFox
//Description: "Convierte el texto a formato ASCII"

const Discord = require('discord.js');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const figlet = require('figlet');
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
        console.log(err);
        return;
      }

      if (data.length <= 2000) {
        interaction.reply('```' + data + '```').catch(console.error);
      }

      else if (data.length > 2000) {
        interaction.reply('El API del ascii excede la cantidad de 2000 caracteres. Intentá poner algo más corto.').catch(console.error);
      }
    });

  },
};
