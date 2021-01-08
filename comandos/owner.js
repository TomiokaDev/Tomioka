const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async (client, message, args) => {
try{
  let creador =  await client.users.fetch("178651638209314816")
    const embed = new Discord.MessageEmbed()
    .setTitle("Mi dueño es "+creador.tag+"")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
} catch (err) {
    console.log(err);
    return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
}
};
module.exports.config = {
command:"owner",
aliases:["owner"],
cooldown: 5
}
