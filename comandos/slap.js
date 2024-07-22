const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();


module.exports = async (bot, message, args) => {
  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

  try {
    if (member === message.author) return message.channel.send("No estás en un sueño, estás en la vida real :D"); // estoo
    if (member === bot.user) return message.channel.send(`**${message.member.displayName}**, nooooo que me duele :(`); // estoo

    let slap = await neko.sfw.slap();

    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** le da una cachetada a **${member.username}**!`
          : `**${message.member.displayName}** Debes mencionar a alguien, que no sea yo por favor :((`,
        image: {
          url: member
            ? slap.url
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
  command: "slap",
  aliases: ["slap"],
  cooldown: 5
};