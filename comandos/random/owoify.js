const Discord = require('discord.js');
const nekoslife = require('nekos.life');
const neko = new nekoslife();
const config = require('../../config.json');

module.exports = {
	name: 'owoify',
	description: 'Te transforma lo que digas a una manera muy kawaii',
	aliases: ['owosay'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

 let say = args.join(" ")
 let owoify = await neko.OwOify({text: say});
 message.delete({ timeout: 100 })
 if(!say) return message.reply({ content:"debes ponerme algo para que lo repita owo"});
 if(say.length > 200) return message.reply({ content:"Debes ingresar algo menor a 200 caracteres!"});
  console.log(owoify)
 message.channel.send(`**${message.member.displayName}** dice: ${owoify.owo}`)
},
};
