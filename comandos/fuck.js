const db = require("megadb");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const nsfwchannel = new db.crearDB("canales_nsfw");
const client = new Discord.Client();
module.exports = async (bot, message, args) => {
  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

 try {
    let guild = message.guild
    if (member === message.author) return message.channel.send("¿Como te nalguearias a ti mismo?"); // estoo
    if (member === bot.user) return message.channel.send("owo atrevido!"); // estoo
    
  let canalnsfw = await nsfwchannel.get(`${message.guild.id}`)
    console.log(canalnsfw)
    //Operador ternario, nsfwChannel tiene la id del server ? si la tiene la variable es dicha id : no la tiene el valor de la variable es Null
if(!message.channel.nsfw) return message.channel.send('Necesitas estar en un canal Nsfw para hacer eso, por favor ve a <#' + canalnsfw + ">")
   if(!nsfwchannel) return message.channel.send('No hay ningun canal definido');
   const fuckFetch = await fetch("https://nekos.life/api/v2/img/classic"),
      fuckImg = await fuckFetch.json();
  message.delete()
    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** se folló a **${member.username}** owo!`
          : `**${message.member.displayName}** Debes mencionar a alguien, si no tienes con quien ven usa -masturbate`,
        image: {
          url: member
            ? fuckImg.url
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
  command: "fuck",
  aliases: ["fuck"]
};