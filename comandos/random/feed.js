const Discord = require("discord.js");
const fetch = require('node-fetch');
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
	name: 'feed',
	description: 'Comando para dar de comer',
	aliases: ['comer'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {
    
  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

    if (member === message.author) return message.channel.send("Está rico no?"); // estoo
    if (member === message.client.user) return message.channel.send(`**${message.member.displayName}**, No gracias ya comí :3`); // estoo

    let feed = await neko.feed();

    return message.channel.send({
      embeds: [{
        description: member
          ? `**${message.member.displayName}** le da de comer a **${member.username}**!`
          : `**${message.member.displayName}** Debes mencionar a alguien, que no sea yo porque ya comí owo`,
        image: {
          url: member
            ? feed.url
            : "http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
        },
        color: message.guild ? message.guild.me.displayColor : "#00e059"
      }]
    });

  },
};