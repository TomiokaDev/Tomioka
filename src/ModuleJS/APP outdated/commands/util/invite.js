const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'Para invitar el bot',
	aliases: ['botinvite' , 'invitebot'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {


 message.channel.send("Para invitar el bot entrá acá: https://top.gg/bot/531408067993141248")

},
};
