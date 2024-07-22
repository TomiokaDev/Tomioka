//TomiokaBot
//By @SupahFox
//Description: Te transforma lo que digas a una manera muy kawaii

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const nekoslife = require('nekos.life');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'neko'.
const neko = new nekoslife();
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
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
