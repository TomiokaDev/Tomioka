const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
	name: 'nekogif',
	description: 'Comando para mostrar gifs de nekos',
	aliases: ['gifnekos'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

let nekosgif = await neko.nekoGif();


const embed = new Discord.MessageEmbed()
    .setTitle("Nekos!")
    .setColor(config.color)
    .setImage(nekosgif.url)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
     message.channel.send({ embeds: [embed] })

    },
  };
