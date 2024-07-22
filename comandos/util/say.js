const Discord = require('discord.js');

module.exports = {
	name: 'say',
	description: 'Comando para hacer el bot diga algo',
	aliases: ['textsay'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

 let say = message.content.split(' ').slice(1).join(' ')
 message.delete({ timeout: 100 })
 if(!say) return message.reply({ content:"debes ponerme algo para que lo repita"});
 message.channel.send(say)

 },
};
