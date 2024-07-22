//TomiokaBot
//By @SupahFox
//Description: Comando para corromper tu texto!

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  name: 'zalgo',
  description: 'Comando para corromper tu texto!',
  aliases: ['zlg'],
  guildOnly: true,
  cooldown: 5,
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'texto',
      description: 'texto',
      type: ApplicationCommandOptionType.String,
      required: true
    }
  ],
  run: (client, interaction) => {

    let say = interaction.options.get('texto').value;
    // @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
    const curse = require('curse-text');
    if (!say) return interaction.reply("ḍ̷́é̶̞b̶̜̓e̸̹͂ṡ̷̱ ̸̝̿p̸͔͒o̵͓͠n̷̻̈́ȩ̴̔r̴͓̈́m̸̼̌ë̴͎́ ̴̦̄a̵͠ͅl̶̩͋g̶̿͜ò̵̗ ̷̛̖p̵̳̽a̴͓͑r̴̞̄a̸̱̎ ̵͖͋q̸̫̎u̴̹͒e̸͈͒ ̵̢͊l̶̲͆ȏ̴̬ ̵̯̑r̶̙͆ě̶̮p̴̗̀ḯ̵̢t̷͇͝ã̵̮");
    interaction.reply(`**${interaction.member.displayName}** dice: ${curse(say)}`)

  },
};
