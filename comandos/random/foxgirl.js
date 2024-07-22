const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
	name: 'foxgirl',
	description: 'Comando para mostar gifs de foxgirls',
	aliases: ['zorros'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

let foxgirl = await neko.foxGirl();


const embed = new Discord.MessageEmbed()
    .setTitle("OwO")
    .setColor(config.color)
    .setImage(foxgirl.url)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
     message.channel.send({ embeds: [embed] })
  },
};