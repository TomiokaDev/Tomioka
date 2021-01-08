const db = require("megadb");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const nsfwchannel = new db.crearDB("canales_nsfw");
const client = new Discord.Client();
const nekoslife = require('nekos.life');
const neko = new nekoslife();


module.exports = async (bot, message, args) => {
  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));
  
  try {
    let guild = message.guild
    
  let canalnsfw = await nsfwchannel.get(`${message.guild.id}`)
    console.log(canalnsfw)
    //Operador ternario, nsfwChannel tiene la id del server ? si la tiene la variable es dicha id : no la tiene el valor de la variable es Null
     if(!canalnsfw) return message.channel.send('No hay ningun canal definido. Definelo con tk!setnsfw <#CANAL>');
if(!message.channel.nsfw) return message.channel.send('Necesitas estar en un canal NSFW para hacer eso, por favor ve a <#' + canalnsfw + ">")
    
    
    if (member === message.author) return message.channel.send("Como te chuparias a ti mismo? owo"); // estoo
    if (member === bot.user) return message.channel.send("owo atrevido!"); // estoo
    

    
    let suck = await neko.nsfw.bJ();    

    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** le hace una mamada a **${member.username}** :0`
          : `**${message.member.displayName}** Debes mencionar a alguien para darle sus mamadas`,
        image: {
          url: member
            ? suck.url
            : "https://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
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
  command: "suck",
  aliases: ["suck"],
  cooldown: 5
};
