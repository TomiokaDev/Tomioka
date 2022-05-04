const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'help',
	description: 'Comando para ayuda',
	aliases: ['h'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

  const ownerembednsfw = new Discord.MessageEmbed()
    .addField("ADMIN", "`restart` `shards` `eval`")
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote` `avatar` `poll` `botsuggest` `status`")
    .addField("Comandos de interaccion", "`chocomilk` `cookie` `ask` `orientation` `microwave` `kiss` `pat` `poke` `slap` `tickle` `feed` `hug` `cuddle` `lasubeolabaja` `say` `owoify` `zalgo` `ascii`")
    .addField("Comandos de reacción","`tabien` `tamal` `tamaomeno` `tahelao` `amimir` `cyber` `trespingos`")
    .addField("Comandos random", "`owo` `uwu` `pan` `like`")
    .addField("Imagenes random", "`cat` `dog` `neko` `nekogif` `foxgirl` `fox`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `idinfo` `donate` `invite`")
    .addField("Steam", "`steamid`")
    .addField("Comandos de NSFW (Descontinuado temporalmente debido a cambios recientes en la API)", " `suck` `anal` `cum` `pussy` `fuck` `boobs` `yuri` `eroyuri` `trap` `tits` `kitsune` `erokitsune` `futanari` `feet` `erofeet` `feetgif`")
    .addField("Música (EN MANTENIMIENTO)", "`play` `stop` `skip` `volume` `shuffle` `pause` `resume` `repeat` `jump` `autoplay` `loop` `filters`")
    .addField("Comandos secretos", "`walter` `monki` `hamsterdance` `cow` `amogus` `toyota`")
    .setColor(config.color)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
    .setThumbnail(message.client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }));
  if(message.author.id === '178651638209314816' && message.channel.nsfw) return message.channel.send({ embeds: [ownerembednsfw] })

  const ownerembed = new Discord.MessageEmbed()
    .addField("ADMIN", "`restart` `shards` `eval`")
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote` `avatar` `poll` `botsuggest` `status`")
    .addField("Comandos de interaccion", "`chocomilk` `cookie` `ask` `orientation` `microwave` `kiss` `pat` `poke` `slap` `tickle` `feed` `hug` `cuddle` `lasubeolabaja` `say` `owoify` `zalgo` `ascii`")
    .addField("Comandos de reacción","`tabien` `tamal` `tamaomeno` `tahelao` `amimir` `cyber` `trespingos`")
    .addField("Comandos random", "`owo` `uwu` `pan` `like`")
    .addField("Imagenes random", "`cat` `dog` `neko` `nekogif` `foxgirl` `fox`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `idinfo` `donate` `invite`")
    .addField("Steam", "`steamid`")
    .addField("Música (EN MANTENIMIENTO)", "`play` `stop` `skip` `volume` `shuffle` `pause` `resume` `repeat` `jump` `autoplay` `loop` `filters`")
    .addField("Comandos secretos", "`walter` `monki` `hamsterdance` `cow` `amogus` `toyota`")
    .setColor(config.color)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
    .setThumbnail(message.client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }));
  if(message.author.id === '178651638209314816' && !message.channel.nsfw) return message.channel.send({ embeds: [ownerembed] })


  const embed = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote` `avatar` `poll` `botsuggest` `status`")
    .addField("Comandos de interaccion", "`chocomilk` `cookie` `ask` `orientation` `microwave` `kiss` `pat` `poke` `slap` `tickle` `feed` `hug` `cuddle` `lasubeolabaja` `say` `owoify` `zalgo` `ascii`")
    .addField("Comandos de reacción","`tabien` `tamal` `tamaomeno` `tahelao` `amimir` `cyber` `trespingos`")
    .addField("Comandos random", "`owo` `uwu` `pan` `like`")
    .addField("Imagenes random", "`cat` `dog` `neko` `nekogif` `foxgirl` `fox`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `idinfo` `donate` `invite`")
    .addField("Steam", "`steamid`")
    .addField("Música (EN MANTENIMIENTO)", "`play` `stop` `skip` `volume` `shuffle` `pause` `resume` `repeat` `jump` `autoplay` `loop` `filters`")
    .addField("Comandos secretos", "Encuentralos owo")
    .setColor(config.color)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
    .setThumbnail(message.client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }));
  if(!message.channel.nsfw) return message.channel.send({ embeds: [embed] }) 
  
  const embednsfw = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`report` `suggest` `anuncio` `vote` `avatar` `poll` `botsuggest` `status`")
    .addField("Comandos de interaccion", "`chocomilk` `cookie` `ask` `orientation` `microwave` `kiss` `pat` `poke` `slap` `tickle` `feed` `hug` `cuddle` `lasubeolabaja` `say` `owoify` `zalgo` `ascii`")
    .addField("Comandos de reacción","`tabien` `tamal` `tamaomeno` `tahelao` `amimir` `cyber` `trespingos`")
    .addField("Comandos random", "`owo` `uwu` `pan` `like`")
    .addField("Imagenes random", "`cat` `dog` `neko` `nekogif` `foxgirl` `fox`")
    .addField("Comandos de información", "`owner` `info` `ping` `serverinfo` `userinfo` `idinfo` `donate` `invite`")
    .addField("Steam", "`steamid`")
    .addField("Comandos de NSFW (Descontinuado temporalmente debido a cambios recientes en la API)", " `suck` `anal` `cum` `pussy` `fuck` `boobs` `yuri` `eroyuri` `trap` `tits` `kitsune` `erokitsune` `futanari` `feet` `erofeet` `feetgif`")
    .addField("Música (EN MANTENIMIENTO)", "`play` `stop` `skip` `volume` `shuffle` `pause` `resume` `repeat` `jump` `autoplay` `loop` `filters`")
    .addField("Comandos secretos", "Encuentralos owo")
    .setColor(config.color)
    .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
    .setThumbnail(message.client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }));
  if(message.channel.nsfw) return message.channel.send({ embeds: [embednsfw] })

 },
};
