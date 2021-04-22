const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
	name: 'kiss',
	description: 'Comando para dar besos',
	aliases: ['kissuser'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

    if (member === message.author) return message.channel.send("¿Acaso quieres besarte a ti mismo?"); // estoo
    if (member === message.client.user) return message.channel.send(`**${message.member.displayName}**, N-no puedo hacerlo >.<`); // estoo

    let kissgif = await neko.sfw.kiss();

    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** le dio un beso a **${member.username}** :heart:!`
          : `**${message.member.displayName}** Debes mencionar a alguien, que no sea a mi o///o`,
        image: {
          url: member
            ? kissgif.url
            : "http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
        },
        color: message.guild ? message.guild.me.displayColor : "#00e059"
      }
    });
    
  },
};