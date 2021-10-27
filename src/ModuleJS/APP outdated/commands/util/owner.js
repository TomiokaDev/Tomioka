const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'owner',
	description: 'Comando para mostrar el dueño del bot',
	aliases: ['botowner'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

  let creador =  await message.client.users.fetch("178651638209314816")
    const embed = new Discord.MessageEmbed()
    .setTitle("Mi dueño es "+creador.tag+"")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
  },
};
