const Discord = require('discord.js');

module.exports = {
	name: 'anuncio',
	description: 'Comando para anunciar',
	aliases: ['ann', 'anunciar'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

    let anuncio = message.content.split(' ').slice(1).join(' ')  
    if(!anuncio) return message.reply({ content:"falta un contenido."});
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply({ content:"No tienes permisos."});
    message.delete({ timeout: 5000 })
const embed = new Discord.MessageEmbed()
  .setTitle(`Anuncio de ${message.guild}`)
  .setDescription(`${anuncio}`)
  .setColor(config.color)
  .setFooter({text: `Responsable: ${message.author.tag}`}, message.author.displayAvatarURL())
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
    message.channel.send({ embeds: [embed] })

 },
};