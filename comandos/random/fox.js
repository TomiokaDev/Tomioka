const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require('../../config.json');

module.exports = {
	name: 'fox',
	description: 'Comando para mostar zorros',
	aliases: ['zorros'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {


     let fox = await fetch("https://randomfox.ca/floof/"),
     foximg = await fox.json();
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Zorritos!")
    .setImage(foximg.image)
    .setColor(config.color)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
    return message.channel.send({ embed : embed });
  },
};
