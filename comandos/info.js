const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async (client, message, args) => {

const promises = [
         client.shard.fetchClientValues('guilds.cache.size'),
         client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
      ];

 let support = `${client.guilds.cache.get("178651985015209984")} [entra aquí](https://discord.gg/yzaTfgU)`
 let creador = await client.users.fetch("178651638209314816")
 let colaborador = await client.users.fetch("706694530497380463")
 let colaborador2 = await client.users.fetch("696481341566615664")
 let colaborador3 = await client.users.fetch("604227193651986443")

Promise.all(promises).then(results => {
 const guilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
 const users = results[1].reduce((acc, memberCount) => acc + memberCount, 0);

 const embed = new Discord.MessageEmbed()
 .setTitle("Bot info")
 .setDescription("Bot de diversión y memes")
 .addField("Nombre:", client.user.username)
 .addField("Creador:", creador.tag)
 .addField("Colaboradores:", `${colaborador.tag} ${colaborador2.tag} ${colaborador3.tag}`)
 .addField("Servidores:", guilds)
 .addField("Cantidad global de usuarios:", users)
 .addField("Lenguaje", "`Spanish (Uruguay)` `English`")
 .addField("Etiquetas:", "`Diversión` `Memes` `Anime`")
 .addField("Support server:", support)
 .setThumbnail(client.user.avatarURL({ dynamic: false, format: 'png', size: 1024 }))
 .setColor(config.color)
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 message.channel.send({ embed: embed })
})
};
module.exports.config = {
command:"info",
aliases:["info"],
cooldown: 5
}
