const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
	name: 'dog',
	description: 'Comando para mostrar perros',
	aliases: ['doggo', 'perritos'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

let woof = await neko.sfw.woof();


const embed = new Discord.MessageEmbed()
    .setTitle("Perritos!")
    .setColor(config.color)
    .setImage(woof.url)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
     message.channel.send({ embeds: [embed] })

  },
};
