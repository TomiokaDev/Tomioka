const db = require("megadb");
const Discord = require("discord.js");
const fetch = import("node-fetch");
const nsfwchannel = new db.crearDB("canales_nsfw");
const nekoslife = require('nekos.life');
const neko = new nekoslife();
const config = require('../../config.json');

module.exports = {
	name: 'anal',
	description: 'Comando NSFW para hacerle un anal a alguien.',
	aliases: ['anal', 'analfuck'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));
    let guild = message.guild
    
  let canalnsfw = await nsfwchannel.get(`${message.guild.id}`)
    console.log(canalnsfw)
    //Operador ternario, nsfwChannel tiene la id del server ? si la tiene la variable es dicha id : no la tiene el valor de la variable es Null
   if(!canalnsfw) return message.channel.send('No hay ningun canal definido. Definelo con tk!setnsfw <#CANAL>');
   if(!message.channel.nsfw) return message.channel.send('Necesitas estar en un canal NSFW para hacer eso, por favor ve a <#' + canalnsfw + ">")
   
   if (member === message.author) return message.channel.send("Como te culearias a vos mismo? qwq"); // estoo
    if (member === message.bot.user) return message.channel.send("owo atrevido!"); // estoo
    
    let canal = message.client.channels.cache.get(canalnsfw);
    
    let anal = await neko.nsfw.anal();

    return message.channel.send({
      embed: {
        
        description: member
          ? `**${message.member.displayName}** le hace un anal a **${member.username}** :0!`
          : `**${message.member.displayName}** Debes mencionar a alguien`,
        image: {
          url: member
            ? anal.url
            : "http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
        },
        color: message.guild ? message.guild.me.displayColor : "#00e059"
        
      }
    });

 },
};


