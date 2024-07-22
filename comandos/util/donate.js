const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require('../../config.json');

module.exports = {
	name: 'donate',
	description: 'Comando para donaciones',
	aliases: ['donar', 'donaciones'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

 const embed = new Discord.MessageEmbed()
 .setTitle("Donaciones")
 .setDescription("Nos encantaría que nos dones para mantener este bot!")
 //.addField("Metodos de pago:", `[PayPal](https://www.paypal.me/supahfoxeh) [Patreon](https://www.patreon.com/supahfox)`)
 .addField("Metodos de pago:", `[Patreon](https://www.patreon.com/supahfox)`)
 .addField("Bitcoin", "1GCZLCUnAtFhx5iHzRHk9Abwi6nAikNgS9")
 .addField("Ethereum", "0x94A15E2a159289790109F6C422fC352C9850B4C7")
 .setColor(config.color)
 .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL());
  message.channel.send({ embeds: [embed] })

  },
};