const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();


module.exports = async (bot, message, args) => {
  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

  try {
    if (member === message.author) return message.channel.send("Veo que te estás abrazando vos solo, mencioná a alguien :D"); // estoo
    if (member === bot.user) return message.channel.send(`**${message.member.displayName}**, Ayyyy nwn me encantan los abrazos!`); // estoo

    let hug = await neko.sfw.hug();

    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** le dio un abrazo a **${member.username}** uwu`
          : `**${message.member.displayName}** Debes mencionar a alguien, a mi tambien por favor necesito un abrazo! uwu`,
        image: {
          url: member
            ? hug.url
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
  command: "hug",
  aliases: ["hug"],
  cooldown: 5
};