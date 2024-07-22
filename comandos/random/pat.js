const Discord = require("discord.js");
const fetch = require('node-fetch');
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
	name: 'pat',
	description: 'Comando para hacer caricias en la cabeza a alguien',
	aliases: ['patting'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

    if (member === message.author) return message.channel.send("Un poco de caricias a uno mismo ayuda a calmarse uwu"); // estoo
    if (member === message.client.user) return message.channel.send(`**${message.member.displayName}**, ayyyyy nwn`); // estoo

    let pat = await neko.pat();

    return message.channel.send({
      embed: [{
        description: member
          ? `**${message.member.displayName}** acarició a **${member.username}**!`
          : `**${message.member.displayName}** Debes mencionar a alguien, que no sea yo owo`,
        image: {
          url: member
            ? pat.url
            : "http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
        },
        color: message.guild ? message.guild.me.displayColor : "#00e059"
      }]
    });

  },
};