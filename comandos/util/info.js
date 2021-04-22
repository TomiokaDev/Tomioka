const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'info',
	description: 'Información técnica y general del bot',
	aliases: ['botinfo'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

const promises = [
         message.client.shard.fetchClientValues('guilds.cache.size'),
         message.client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
      ];

 let support = `${message.client.guilds.cache.get("178651985015209984")} [entra aquí](https://discord.gg/yzaTfgU)`
 let creador = await message.client.users.fetch("178651638209314816")
 let colaborador = await message.client.users.fetch("706694530497380463")
 let colaborador2 = await message.client.users.fetch("696481341566615664")
 let colaborador3 = await message.client.users.fetch("604227193651986443")

Promise.all(promises).then(results => {
 const guilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
 const users = results[1].reduce((acc, memberCount) => acc + memberCount, 0);

 const embed = new Discord.MessageEmbed()
 .setTitle("Bot info")
 .setDescription("Información técnica y general del bot")
 .addField("Nombre:", "``" + message.client.user.username + "``")
 .addField("Creador:", "``" + creador.tag + "``")
 .addField("Colaboradores:", "``" + colaborador.tag  + "`` " + "``" + colaborador2.tag + "`` " + "``" + colaborador3.tag + "``")
 .addField("Servidores:", "``" + guilds + "``")
 .addField("Cantidad global de usuarios:", "``" + users + "``")
 .addField("Librería", "``Discord.js " + Discord.version +"``")
 .addField("Lenguaje", "`Spanish (Uruguay)` `English`")
 .addField("Etiquetas:", "`Diversión` `Memes` `Anime`")
 .setThumbnail(message.client.user.avatarURL({ dynamic: false, format: 'png', size: 1024 }))
 .setColor(config.color)
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 message.channel.send({ embed: embed })
})

},
};
