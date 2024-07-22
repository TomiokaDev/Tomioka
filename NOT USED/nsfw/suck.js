const db = require("megadb");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const nsfwchannel = new db.crearDB("canales_nsfw");
const { Intents } = require('discord.js');
const client = new Discord.Client({
	intents: [
		      Intents.FLAGS.GUILDS,
			  Intents.FLAGS.GUILD_MESSAGES,
			  Intents.FLAGS.DIRECT_MESSAGES,
			  Intents.FLAGS.GUILD_VOICE_STATES
			 ]
});
const nekoslife = require('nekos.life');
const neko = new nekoslife();
const config = require('../../config.json');

module.exports = {
	name: 'suck',
	description: 'Comando NSFW para chuparsela a alguien',
	aliases: ['succ'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {
    
  var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));
  
    let guild = message.guild
    
  let canalnsfw = await nsfwchannel.get(`${message.guild.id}`)
    console.log(canalnsfw)
    //Operador ternario, nsfwChannel tiene la id del server ? si la tiene la variable es dicha id : no la tiene el valor de la variable es Null
     if(!canalnsfw) return message.channel.send({ content: 'No hay ningun canal definido. Definelo con tk!setnsfw <#CANAL>'});
if(!message.channel.nsfw) return message.channel.send({ content: 'Necesitas estar en un canal Nsfw para hacer eso, por favor ve a <#' + canalnsfw + ">"});
    
    
    if (member === message.author) return message.channel.send("Como te chuparias a ti mismo? owo"); // estoo
    if (member === message.client.user) return message.channel.send("owo atrevido!"); // estoo
    

    
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

  },
};
