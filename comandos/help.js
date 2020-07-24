const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => {      
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos") 
  
  const embed = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote`")
    .addField("Comandos de reacción e interaccion", "`chocomilk` `owo` `uwu` `cookie` `clown` `question` `orientation` `microwave` `tabien` `tamal` `tamaomeno` `tahelao` `amimir` `pan` `cyber` `trespingos` `punch` `kiss` `lasubeolabaja` `like` `say`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `donate` `invite`")
    .addField("Comandos de NSFW", "Para ver los comandos de este apartado, es necesario estar en un canal apropiado por razones de seguridad.")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
  if(!message.channel.nsfw) return message.channel.send({ embed: embed }) 
  
  const embednsfw = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote`")
    .addField("Comandos de reacción e interaccion", "`chocomilk` `owo` `uwu` `cookie` `clown` `question` `orientation` `microwave` `tabien` `tamal` `tamaomeno` `tahelao` `amimir` `pan` `cyber` `trespingos` `punch` `kiss` `lasubeolabaja` `like` `say`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `donate` `invite`")
    .addField("Comandos de NSFW", " `suck` `anal` `cum` `eatpussy` `fuck`")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
  if(message.channel.nsfw) return message.channel.send({ embed: embednsfw })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms 
  }