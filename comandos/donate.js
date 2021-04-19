const Discord = require("discord.js");
const fetch = require("node-fetch");
const config = require('../config.js');


module.exports = async(client, message, args) => {
try{
 const embed = new Discord.MessageEmbed()
 .setTitle("Donaciones")
 .setDescription("Nos encantaría que nos dones para mantener este bot!")
 //.addField("Metodos de pago:", `[PayPal](https://www.paypal.me/supahfoxeh) [Patreon](https://www.patreon.com/supahfox)`)
 .addField("Metodos de pago:", `[Patreon](https://www.patreon.com/supahfox)`)
 .addField("Bitcoin", "1GCZLCUnAtFhx5iHzRHk9Abwi6nAikNgS9")
 .addField("Ethereum", "0x94A15E2a159289790109F6C422fC352C9850B4C7")
 .setColor(config.color)
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
  message.channel.send({ embed: embed })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"donate",
aliases:["donate"],
cooldown: 5
}