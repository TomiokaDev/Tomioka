//TomiokaBot
//By @SupahFox
//Description: Te transforma lo que digas a una manera muy kawaii

const Discord = require('discord.js');
const nekoslife = require('nekos.life');
const neko = new nekoslife();
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const config = require('../../config.json');

module.exports = {
  name: 'owoify',
  description: 'Te transforma lo que digas a una manera muy kawaii',
  aliases: ['owosay'],
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
  run: async (client, interaction) => {

    let say = interaction.options.get('texto').value;
    let owoify = await neko.OwOify({ text: say });
    if (!say) return interaction.reply("debes ponerme algo para que lo repita owo");
    if (say.length > 200) return interaction.reply("Debes ingresar algo menor a 200 caracteres!")
    interaction.reply(`**${interaction.member.displayName}** dice: ${owoify.owo}`)
  },
};
