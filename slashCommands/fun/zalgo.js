const Discord = require('discord.js');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');

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

 let say = args.join(" ")
 const curse = require('curse-text');
 message.delete({ timeout: 100 })
 if(!say) return interaction.reply("ḍ̷́é̶̞b̶̜̓e̸̹͂ṡ̷̱ ̸̝̿p̸͔͒o̵͓͠n̷̻̈́ȩ̴̔r̴͓̈́m̸̼̌ë̴͎́ ̴̦̄a̵͠ͅl̶̩͋g̶̿͜ò̵̗ ̷̛̖p̵̳̽a̴͓͑r̴̞̄a̸̱̎ ̵͖͋q̸̫̎u̴̹͒e̸͈͒ ̵̢͊l̶̲͆ȏ̴̬ ̵̯̑r̶̙͆ě̶̮p̴̗̀ḯ̵̢t̷͇͝ã̵̮");
 console.log(curse)
 interaction.reply(`**${message.member.displayName}** dice: ${curse(say)}`)
 
},
};
