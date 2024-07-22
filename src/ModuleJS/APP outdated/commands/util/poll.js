const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'poll',
	description: 'Comando para hacer encuentas',
	aliases: ['pollsv'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

 let poll = message.content.split(' ').slice(1).join(' ')
 if(!poll) return message.reply("Debes poner algo!");

const embed = new Discord.MessageEmbed()
 .setTitle(`Encuesta!`)
 .setDescription(poll)
 .addField("Si:", ":white_check_mark:")
 .addField("No:", ":x:")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({embed: embed}).then(embed => {
    embed.react('✅')
    embed.react('❌')
  });

},
};


