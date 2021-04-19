const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async (client, message, args) => {

if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;

try{
 let AP1 = await client.users.fetch("434888018067980288");
 let AP2 = await client.users.fetch("696481341566615664");


 const embed = new Discord.MessageEmbed()
 .setTitle("Integrantes de AP (Atención personalizada)")
 .setDescription("Estos son los discapacitados mentales que están en AP")
 .addField("AP:", "``" + AP1.tag + "`` " +  "``" + AP2.tag + "`` ")
 .setFooter(`texto de abajo`, message.author.avatarURL())
 .setColor(config.color)
 .setFooter(`Ejecutado por: ${message.author.tag}`)
 message.channel.send({ embed: embed })

}catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
}

}
module.exports.config = {
command:"ap",
aliases:["ap"],
cooldown: 5
}
