const Discord = require('discord.js');

module.exports = {
	name: 'say',
	description: 'Comando para hacer el bot diga algo',
	aliases: ['textsay'],
	guildOnly: true,
	cooldown: 5,
	run: (client, interaction) => {

 let say = message.content.split(' ').slice(1).join(' ')
 message.delete({ timeout: 100 })
 if(!say) return interaction.reply("debes ponerme algo para que lo repita");
 interaction.reply(say)

 },
};
