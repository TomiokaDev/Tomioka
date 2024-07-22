const db = require("megadb");
const Discord = require("discord.js");
const fetch = require("node-fetch");
const nsfwchannel = new db.crearDB("canales_nsfw");
const client = new Discord.Client();
const nekoslife = require('nekos.life');
const neko = new nekoslife();
const config = require('../../config.json');

module.exports = {
	name: 'yuri',
	description: 'Comando NSFW para mostrar yuri!',
	aliases: ['yuriimg'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {
  
let yuri = await neko.nsfw.yuri();

 let guild = message.guild
    
  let canalnsfw = await nsfwchannel.get(`${message.guild.id}`)
    console.log(canalnsfw)
    //Operador ternario, nsfwChannel tiene la id del server ? si la tiene la variable es dicha id : no la tiene el valor de la variable es Null
   if(!canalnsfw) return message.channel.send('No hay ningun canal definido. Definelo con tk!setnsfw <#CANAL>');
   if(!message.channel.nsfw) return message.channel.send('Necesitas estar en un canal NSFW para hacer eso, por favor ve a <#' + canalnsfw + ">")

const embed = new Discord.MessageEmbed()
    .setTitle("Acá tenés yuri!")
    .setColor(config.color)
    .setImage(yuri.url)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
     message.channel.send({ embed: embed })

    },
  };