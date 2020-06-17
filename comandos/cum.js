const db = require("megadb");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const nsfwchannel = new db.crearDB("canales_nsfw");
const client = new Discord.Client();
const cooldown = new Set();
module.exports = async (bot, message, args) => {
  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

 try {
    let guild = message.guild
    
  let canalnsfw = await nsfwchannel.get(`${message.guild.id}`)
    console.log(canalnsfw)
    //Operador ternario, nsfwChannel tiene la id del server ? si la tiene la variable es dicha id : no la tiene el valor de la variable es Null
    if(!canalnsfw) return message.channel.send('No hay ningun canal definido');
if(!message.channel.nsfw) return message.channel.send('Necesitas estar en un canal Nsfw para hacer eso, por favor ve a <#' + canalnsfw + ">")
   
   if (member === message.author) return message.channel.send("No es necesario mencionarte a ti mismo para correrte owo"); // estoo
    if (member === bot.user) return message.channel.send("owo atrevido!"); // estoo
   
    const cumFetch = await fetch("https://nekos.life/api/v2/img/cum"),
    cumImg = await cumFetch.json();

  return message.channel.send({
      embed: {
        
        description: member
          ? `**${message.member.displayName}** se vino en **${member.username}** :0!`
          : `**${message.member.displayName}** se corrió`,
        image: {
          url: member
            ? cumImg.url
            : cumImg.url
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
  command: "cum",
  aliases: ["cum"]
};
