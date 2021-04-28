const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
	name: 'guildCreate',
	once: true,
	execute(client) {

try{
const promises = [
         client.shard.fetchClientValues('guilds.cache.size'),
      ];
Promise.all(promises).then(results => {
         
         const guilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);

 let md = client.users.cache.get("178651638209314816")
  const embed = new Discord.MessageEmbed()
  .setTitle(`Ahora estoy en ${guilds} servidores`)
  .addField("Nombre:", guild.name)
  .addField("Creador:", guild.owner.user.tag)
  .addField("Usuarios:", guild.members.cache.size)
  .addField("ID:", guild.id)
  .setColor(config.color)
  .setFooter(`Noticia del bot ${client.user.username}`)
  .setThumbnail(guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
  md.send({ embed: embed })
});

},
};