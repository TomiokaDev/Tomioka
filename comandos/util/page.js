const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'page',
	description: 'Te muestra la página del bot',
	aliases: ['owosay'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

   let creador = client.users.cache.get("178651638209314816")
    const embed = new Discord.MessageEmbed()
    .setDescription(`Accede a la página de ${creador.username} [cliqueando aquí](https://tomiokabot.wixsite.com/tomiokabot) (actualmente activa)`)
    .setColor(config.color)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
    message.channel.send({ embeds: [embed] })

  },
};