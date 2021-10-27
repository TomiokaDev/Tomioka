//import Discord = require('discord.js');
const Discord = require("discord.js")
const config = require('./../../APP config/config.json')

module.exports = {
	name: 'ap',
	description: 'Enumera a los enfermos mentales de AP',
	aliases: ['atencionpersonalizada', 'retard'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;
 let AP1 = await message.client.users.fetch("434888018067980288");
 let AP2 = await message.client.users.fetch("696481341566615664");
 let AP3 = await message.client.users.fetch("524231408407805952");


 const embed = new Discord.MessageEmbed()
 .setTitle("Integrantes de AP (Atención personalizada)")
 .setDescription("Estos son los discapacitados mentales que están en AP")
 .addField("AP:", "``" + AP1.tag + "`` " +  "``" + AP2.tag + "`` " + "``" + AP3.tag + "`` ")
 .setFooter(`texto de abajo`, message.author.avatarURL())
 .setColor(config.color)
 .setFooter(`texto de abajo`, message.author.avatarURL())
 message.channel.send({ embed: embed })

},
};
