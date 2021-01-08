const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();


module.exports = async (bot, message, args) => {
  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

  try {
    if (member === message.author) return message.channel.send("Mmmmm creo que no es lo mismo que hacerle cosquillas a alguien"); // estoo
    if (member === bot.user) return message.channel.send(`**${message.member.displayName}**, AJAJAJAJAJAJAJAJAJAA >.<`); // estoo

    let tickle = await neko.sfw.tickle();

    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** le hace cosquillas a **${member.username}**!`
          : `**${message.member.displayName}** Debes mencionar a alguien, que no sea a mi por que soy sensible a las cosquillas o///o`,
        image: {
          url: member
            ? tickle.url
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
  command: "tickle",
  aliases: ["tickle"],
  cooldown: 5
};