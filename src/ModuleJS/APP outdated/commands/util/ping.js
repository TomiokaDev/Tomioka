const Discord = require('discord.js'); 
const config = require('../../config.json');

module.exports = {
	name: 'ping',
	description: 'Comando para hacer ping',
	aliases: ['pong'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

    var mping = Date.now() - message.createdTimestamp + " ms"
    let ping = Math.floor(message.client.ws.ping) + " ms"
    const embed = new Discord.MessageEmbed()
    .setTitle("Ping")
    .addField("Ping de Discord API:", ping)
    .addField("Ping de mensajes:", mping)
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })

 },
};
