const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'info',
	description: 'Información técnica y general del bot',
	aliases: ['botinfo'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

const servidores = message.client.guilds.cache
const miembrosTotales = servidores.reduce((acc, guild) => acc + guild.memberCount, 0);

 let support = `${message.client.guilds.cache.get("178651985015209984")} [entra aquí](https://discord.gg/yzaTfgU)`
 let creador = await message.client.users.fetch("178651638209314816")
 let colaborador = await message.client.users.fetch("706694530497380463")
 let colaborador2 = await message.client.users.fetch("696481341566615664")
 let colaborador3 = await message.client.users.fetch("604227193651986443")

 const embed = new Discord.MessageEmbed()
 .setTitle("Bot info")
 .setDescription("Información técnica y general del bot")
 .addField("Nombre:", "``" + message.client.user.username + "``")
 .addField("Desarrolladores:", "``" + creador.tag + "`` " + "``" + colaborador2.tag + "``")
 .addField("Colaboradores:", "``" + colaborador3.tag + "``")
 .addField("Servidores:", `\`${servidores.size}\``)
 .addField("Cantidad global de usuarios:", "``" + miembrosTotales + "``")
 .addField("Librería", "``Discord.js " + Discord.version +"``")
 .addField("Lenguaje", "`Spanish (Uruguay)`")
 .addField("Etiquetas:", "`Diversión` `Memes` `Anime`")
 .setThumbnail(message.client.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 }))
 .setColor(config.color)
 .setFooter({ text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL());
 message.channel.send({ embeds: [embed] })

},
};
