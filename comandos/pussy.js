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
   
   if (member === message.author) return message.channel.send("No es necesario mencionarte a ti mismo para manoseartela owo"); // estoo
    if (member === bot.user) return message.channel.send("Pero si yo tengo pito :/"); // estoo
   
    let pussy = await neko.nsfw.pussyWankGif();

  return message.channel.send({
      embed: {
        
        description: member
          ? `**${message.member.displayName}** le dijo a **${member.username}** que se manoseara la cuca :0`
          : `**${message.member.displayName}** se está manoseando la cuca :0`,
        image: {
          url: member
            ? pussy.url
            : pussy.url
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
  command: "pussy",
  aliases: ["pussy"],
  cooldown: 5
};
