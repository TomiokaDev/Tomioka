const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
 try{

  const ownerembednsfw = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote` `avatar` `poll` `botsuggest` `status`")
    .addField("Comandos de interaccion", "`chocomilk` `cookie` `ask` `orientation` `microwave` `kiss` `pat` `poke` `slap` `tickle` `feed` `hug` `cuddle` `lasubeolabaja` `say` `owoify` `zalgo` `ascii`")
    .addField("Comandos de reacción","`tabien` `tamal` `tamaomeno` `tahelao` `amimir` `cyber` `trespingos`")
    .addField("Comandos random", "`owo` `uwu` `pan` `like`")
    .addField("Imagenes random", "`cat` `dog` `neko` `nekogif` `foxgirl` `fox`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `idinfo` `donate` `invite`")
    .addField("Steam", "`steamid`")
    .addField("Comandos de NSFW", " `suck` `anal` `cum` `pussy` `fuck` `boobs` `yuri` `eroyuri` `trap` `tits` `kitsune` `erokitsune` `futanari` `feet` `erofeet` `feetgif`")
    .addField("Comandos secretos", "`walter` `monki` `hamsterdance` `cow` `amogus` `toyota`")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    .setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  if(message.author.id === '178651638209314816' && message.channel.nsfw) return message.channel.send({ embed: ownerembednsfw })

  const ownerembed = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote` `avatar` `poll` `botsuggest` `status`")
    .addField("Comandos de interaccion", "`chocomilk` `cookie` `ask` `orientation` `microwave` `kiss` `pat` `poke` `slap` `tickle` `feed` `hug` `cuddle` `lasubeolabaja` `say` `owoify` `zalgo` `ascii`")
    .addField("Comandos de reacción","`tabien` `tamal` `tamaomeno` `tahelao` `amimir` `cyber` `trespingos`")
    .addField("Comandos random", "`owo` `uwu` `pan` `like`")
    .addField("Imagenes random", "`cat` `dog` `neko` `nekogif` `foxgirl` `fox`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `idinfo` `donate` `invite`")
    .addField("Steam", "`steamid`")
    .addField("Comandos secretos", "`walter` `monki` `hamsterdance` `cow` `amogus` `toyota`")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    .setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  if(message.author.id === '178651638209314816' && !message.channel.nsfw) return message.channel.send({ embed: ownerembed })


  const embed = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote` `avatar` `poll` `botsuggest` `status`")
    .addField("Comandos de interaccion", "`chocomilk` `cookie` `ask` `orientation` `microwave` `kiss` `pat` `poke` `slap` `tickle` `feed` `hug` `cuddle` `lasubeolabaja` `say` `owoify` `zalgo` `ascii`")
    .addField("Comandos de reacción","`tabien` `tamal` `tamaomeno` `tahelao` `amimir` `cyber` `trespingos`")
    .addField("Comandos random", "`owo` `uwu` `pan` `like`")
    .addField("Imagenes random", "`cat` `dog` `neko` `nekogif` `foxgirl` `fox`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `idinfo` `donate` `invite`")
    .addField("Steam", "`steamid`")
    .addField("Comandos secretos", "Encuentralos owo")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    .setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  if(!message.channel.nsfw) return message.channel.send({ embed: embed }) 
  
  const embednsfw = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote` `avatar` `poll` `botsuggest` `status`")
    .addField("Comandos de interaccion", "`chocomilk` `cookie` `ask` `orientation` `microwave` `kiss` `pat` `poke` `slap` `tickle` `feed` `hug` `cuddle` `lasubeolabaja` `say` `owoify` `zalgo` `ascii`")
    .addField("Comandos de reacción","`tabien` `tamal` `tamaomeno` `tahelao` `amimir` `cyber` `trespingos`")
    .addField("Comandos random", "`owo` `uwu` `pan` `like`")
    .addField("Imagenes random", "`cat` `dog` `neko` `nekogif` `foxgirl` `fox`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `idinfo` `donate` `invite`")
    .addField("Steam", "`steamid`")
    .addField("Comandos de NSFW", " `suck` `anal` `cum` `pussy` `fuck` `boobs` `yuri` `eroyuri` `trap` `tits` `kitsune` `erokitsune` `futanari` `feet` `erofeet` `feetgif`")
    .addField("Comandos secretos", "Encuentralos owo")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    .setThumbnail(client.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  if(message.channel.nsfw) return message.channel.send({ embed: embednsfw })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"help",
aliases:["help"],
cooldown: 5
}
