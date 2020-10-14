const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => {
  
  const embed = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote` `avatar` `poll`")
    .addField("Comandos de interaccion", "`chocomilk` `cookie` `ask` `orientation` `microwave` `kiss` `pat` `poke` `slap` `tickle` `feed` `hug` `cuddle` `lasubeolabaja` `say` `owoify`")
    .addField("Comandos de reacción","`tabien` `tamal` `tamaomeno` `tahelao` `amimir` `cyber` `trespingos`")
    .addField("Comandos random", "`owo` `uwu` `pan` `like`")
    .addField("Imagenes random", "`cat` `dog` `neko` `nekogif` `foxgirl`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `idinfo` `donate` `invite`")
    .addField("Comandos secretos", "Encuentralos owo")
    .addField("Comandos de NSFW", "Para ver los comandos de este apartado, es necesario estar en un canal apropiado por razones de seguridad.")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    .setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  if(!message.channel.nsfw) return message.channel.send({ embed: embed }) 
  
  const embednsfw = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote` `avatar` `poll`")
    .addField("Comandos de interaccion", "`chocomilk` `cookie` `ask` `orientation` `microwave` `kiss` `pat` `poke` `slap` `tickle` `feed` `hug` `cuddle` `lasubeolabaja` `say` `owoify`")
    .addField("Comandos de reacción","`tabien` `tamal` `tamaomeno` `tahelao` `amimir` `cyber` `trespingos`")
    .addField("Comandos random", "`owo` `uwu` `pan` `like`")
    .addField("Imagenes random", "`cat` `dog` `neko` `nekogif` `foxgirl`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `idinfo` `donate` `invite`")
    .addField("Comandos secretos", "Encuentralos owo")
    .addField("Comandos de NSFW", " `suck` `anal` `cum` `pussy` `fuck` `boobs` `yuri` `eroyuri` `trap` `tits` `kitsune` `erokitsune` `futanari` `feet` `erofeet` `feetgif`")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    .setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  if(message.channel.nsfw) return message.channel.send({ embed: embednsfw })
};
module.exports.config = {
command:"help",
aliases:["help"],
cooldown: 5
}
