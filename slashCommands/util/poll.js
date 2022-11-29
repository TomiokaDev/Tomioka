const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'poll',
	description: 'Comando para hacer encuentas',
	aliases: ['pollsv'],
	guildOnly: true,
	cooldown: 5,
	run: (client, interaction) => {

 let poll = message.content.split(' ').slice(1).join(' ')
 if(!poll) return interaction.reply("Debes poner algo!");

const embed = new Discord.MessageEmbed()
 .setTitle(`Encuesta!`)
 .setDescription(poll)
 .addField("Si:", ":white_check_mark:")
 .addField("No:", ":x:")
.setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
 .setColor(config.color)
 interaction.reply({embed: embed}).then(embed => {
    embed.react('✅')
    embed.react('❌')
  });

},
};


