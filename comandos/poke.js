const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = async (bot, message, args) => {
  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

  try {
    if (member === message.author) return message.channel.send("¿Como te pokearias a ti mismo?"); // estoo
    if (member === bot.user) return message.channel.send(`**${message.member.displayName}**, Hola si, de que me perdi?`); // estoo

    const pokeFetch = await fetch("https://nekos.life/api/v2/img/poke"),
      pokeImg = await pokeFetch.json();

    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** pokeó a **${member.username}**!`
          : `**${message.member.displayName}** Debes mencionar a alguien, que no sea yo owo`,
        image: {
          url: member
            ? pokeImg.url
            : "http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
        },
        color: message.guild ? message.guild.me.displayColor : "#00e059"
      }
    });
} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
}
};
module.exports.config = {
  command: "poke",
  aliases: ["poke"],
  cooldown: 5
};