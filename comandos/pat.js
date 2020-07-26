const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = async (bot, message, args) => {
  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

  try {
    if (member === message.author) return message.channel.send("Un poco de caricias a uno mismo ayuda a calmarse uwu"); // estoo
    if (member === bot.user) return message.channel.send(`**${message.member.displayName}**, ayyyyy nwn`); // estoo

    const patFetch = await fetch("https://nekos.life/api/v2/img/pat"),
      patImg = await patFetch.json();

    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** pokeó a **${member.username}**!`
          : `**${message.member.displayName}** Debes mencionar a alguien, que no sea yo owo`,
        image: {
          url: member
            ? patImg.url
            : "http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
        },
        color: message.guild ? message.guild.me.displayColor : "#00e059"
      }
    });
  } catch (err) {
    console.log(err);
    return message.reply("Hubo un error"); // estoo
  }
};
module.exports.config = {
  command: "pat",
  aliases: ["pat"],
  cooldown: 5
};
