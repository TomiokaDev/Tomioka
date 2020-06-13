const db = require("megadb");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const nsfwchannel = new db.crearDB("canales_nsfw");
module.exports = async (bot, message, args, channel, client) => {
  
  var member =
    message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));
  
  try {
    if (member === message.author) return message.channel.send("¿Como te nalguearias a ti mismo?"); // estoo
    if (member === bot.user) return message.channel.send("owo atrevido!"); // estoo
    
  
    let canalnsfw = await nsfwchannel.get(`${channel.guild.id}`);
//let guild = `${message.guild.id}`;  
if(!message.channel.nsfw) return message.canal.send('Necesitas estar en un canal Nsfw para hacer eso, por favor ve a' + nsfwchannel)
    
    let canal = client.channels.cache.get(canalnsfw);
    
    const suckFetch = await fetch("https://nekos.life/api/v2/img/bj"),
      suckImg = await suckFetch.json();

    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** le hace una mamada a **${member.username}** owo!`
          : `**${message.member.displayName}** Debes mencionar a alguien para darle sus mamadas`,
        image: {
          url: member
            ? suckImg.url
            : "https://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
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
  command: "suck",
  aliases: ["suck"]
};
