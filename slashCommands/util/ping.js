const Discord = require('discord.js'); 
const config = require('../../config.json');

module.exports = {
	name: 'ping',
	description: 'Comando para hacer ping',
	aliases: ['pong'],
	guildOnly: true,
	cooldown: 5,
	run: (client, interaction) => {

    var mping = Date.now() - message.createdTimestamp + " ms"
    let ping = Math.floor(message.client.ws.ping) + " ms"
    const embed = new EmbedBuilder()
    .setTitle("Ping")
    .addField("Ping de Discord API:", ping)
    .addField("Ping de mensajes:", mping)
    .setColor(config.color)
   .setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
     interaction.reply({ embeds: [embed] })

 },
};
