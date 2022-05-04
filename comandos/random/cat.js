const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
	name: 'cat',
	description: 'Comando para mostrar gatos!',
	aliases: ['gatitos', 'gato'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {
let gatito = await neko.meow();


const embed = new Discord.MessageEmbed()
    .setTitle("Gatitoooo uwu")
    .setColor(config.color)
    .setImage(gatito.url)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
     message.channel.send({ embeds: [embed] })

    },
  };
