const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = async (bot, message, args) => {
  var member = message.mentions.users.first() || message.guild.members.get(args.join(" "));

  try {
    if (member === message.author) return message.channel.send("¿Acaso quieres besarte a ti mismo?"); // estoo
    if (member === bot.user) return message.channel.send(`**${message.member.displayName}**, N-no puedo hacerlo >.<`); // estoo

    const kissFetch = await fetch("https://nekos.life/api/v2/img/kiss"),
      kissImg = await kissFetch.json();

    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** le dio un beso a **${member.username}** :heart:!`
          : `**${message.member.displayName}** Debes mencionar a alguien, que no sea a mi o///o`,
        image: {
          url: member
            ? kissImg.url
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
  command: "kiss",
  aliases: ["kiss"],
  cooldown: 5
};