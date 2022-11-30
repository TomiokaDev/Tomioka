const Discord = require('discord.js');
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'foxgirl',
	description: 'Comando para mostar gifs de foxgirls',
	aliases: ['zorros'],
	guildOnly: true,
	cooldown: 5,
  type: ApplicationCommandType.ChatInput,
  options: [
    {
        name: 'texto',
        description: 'La ID de Steam',
        type: ApplicationCommandOptionType.String,
        required: true
    }
],
run: async(client, interaction) => {

let foxgirl = await neko.foxGirl();


const embed = new EmbedBuilder()
    .setTitle("OwO")
    .setColor(config.color)
    .setImage(foxgirl.url)
    .setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
     interaction.reply({ embeds: [embed] })
  },
};