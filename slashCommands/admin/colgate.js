const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'colgate',
	description: 'Comando pa el toño XDD',
	guildOnly: true,
	cooldown: 5,
	run: async (client, interaction) => {
let guild = client.guilds.cache.get('178651985015209984');
let colgate = ["https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d2/d22416ac2d89e040641ab36be8cf331006a1bcd5_full.jpg"]
let random = colgate[Math.floor(colgate.length * Math.random())];
const embed = new EmbedBuilder()
 .setDescription(`Colgate :moyai:`)
 .setImage(random)
 .setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
 .setColor(config.color)
 interaction.reply({ embeds: [embed] })
},
};

