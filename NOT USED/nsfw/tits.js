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
	name: 'tits',
	description: 'Comando para mostrar tetas',
	aliases: ['tiddy'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

let tits = await neko.nsfw.tits();

 let guild = message.guild
    
  let canalnsfw = await nsfwchannel.get(`${message.guild.id}`)
    console.log(canalnsfw)
    //Operador ternario, nsfwChannel tiene la id del server ? si la tiene la variable es dicha id : no la tiene el valor de la variable es Null
   if(!canalnsfw) return message.channel.send({ content: 'No hay ningun canal definido. Definelo con tk!setnsfw <#CANAL>'});
   if(!message.channel.nsfw) return message.channel.send({ content: 'Necesitas estar en un canal Nsfw para hacer eso, por favor ve a <#' + canalnsfw + ">"});

const embed = new Discord.MessageEmbed()
    .setTitle("Acá tenés uwu")
    .setColor(config.color)
    .setImage(tits.url)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
     message.channel.send({ embeds: [embed] })
     
    },
  };