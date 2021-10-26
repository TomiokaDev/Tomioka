const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
  name: 'cuddle',
  description: 'Comando para dar mimos',
  aliases: ['mimos', 'caricias'],
  guildOnly: true,
  cooldown: 5,
  async execute(message, args) {

    var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));


    if (member === message.author) return message.channel.send("Menciona a alguien más para hacerle mimos!"); // estoo
    if (member === message.client.user) return message.channel.send(`**${message.member.displayName}**, Nyaaaa~ nwn`); // estoo

    let cuddle = await neko.sfw.cuddle();

    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** le hace mimos a **${member.username}** uwu!`
          : `**${message.member.displayName}** Debes mencionar a alguien, a mi también que quiero mimos uwu`,
        image: {
          url: member
            ? cuddle.url
            : "http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
        },
        color: message.guild ? message.guild.me.displayColor : "#00e059"
      }
    });

  },
};