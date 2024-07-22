const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
	name: 'neko',
	description: 'Comando para mostrar nekos',
	aliases: ['nekogirl'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

let nekos = await neko.neko();


const embed = new Discord.MessageEmbed()
    .setTitle("Nekos!")
    .setColor(config.color)
    .setImage(nekos.url)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
     message.channel.send({ embeds: [embed] })

    },
  };
