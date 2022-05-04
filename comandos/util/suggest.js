const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'suggest',
	description: 'Comando para sugerir a un servidor',
	aliases: ['svsuggest'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

    let sugerencia = message.content.split(' ').slice(1).join(' ')
    if(!sugerencia) return message.reply({ content:"falta un contenido."});
      message.delete({ timeout: 5000 })
const embed = new Discord.MessageEmbed()
 .setTitle(`Sugerencia local`)
  .setDescription(`**Aporte:** ${sugerencia}\n**Sugerente:** ${message.author.tag}`)
 .setColor(config.color)
   .setFooter({text: `Servidor: ${message.guild}`}, message.guild.iconURL())
 .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send({ embeds: [embed] })

},
};
