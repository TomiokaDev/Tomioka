const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => {
  
  const embed = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote`")
    .addField("Comandos de reacción e interaccion", "`chocomilk` `owo` `uwu` `cookie` `clown` `question` `orientation` `microwave` `tabien` `tamal` `tamaomeno` `tahelao` `amimir` `pan` `cyber` `trespingos` `punch` `kiss` `pat` `poke` `lasubeolabaja` `like` `say`")
    .addField("Imagenes random", "`gatito`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `donate` `invite`")
    .addField("Comandos de NSFW", "Para ver los comandos de este apartado, es necesario estar en un canal apropiado por razones de seguridad.")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
  if(!message.channel.nsfw) return message.channel.send({ embed: embed }) 
  
  const embednsfw = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote`")
    .addField("Comandos de reacción e interaccion", "`chocomilk` `owo` `uwu` `cookie` `clown` `question` `orientation` `microwave` `tabien` `tamal` `tamaomeno` `tahelao` `amimir` `pan` `cyber` `trespingos` `punch` `kiss` `pat` `poke` `lasubeolabaja` `like` `say`")
    .addField("Imagenes random", "`gatito`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `donate` `invite`")
    .addField("Comandos de NSFW", " `suck` `anal` `cum` `eatpussy` `fuck`")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
  if(message.channel.nsfw) return message.channel.send({ embed: embednsfw })
};
module.exports.config = {
command:"help",
aliases:["help"],
cooldown: 5
}
