import neko = require('nekos.life');

module.exports = {
	name: 'owoify',
	description: 'Te transforma lo que digas a una manera muy kawaii',
	aliases: ['owosay'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

		const say = args.join(' ');
		const owoify = await neko.sfw.OwOify({ text: say });
		message.delete({ timeout: 100 });
		if(!say) return message.reply('debes ponerme algo para que lo repita owo');
		if(say.length > 200) return message.reply('Debes ingresar algo menor a 200 caracteres!');
		console.log(owoify);
		message.channel.send(`**${message.member.displayName}** dice: ${owoify.owo}`);
	},
};
