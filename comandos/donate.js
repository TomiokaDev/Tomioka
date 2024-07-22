const Discord = require("discord.js");
const fetch = require("node-fetch");
const config = require('../config.js');


module.exports = (client, message, args) => { 
 const embed = new Discord.MessageEmbed()
 .setTitle("Donaciones")
 .setDescription("Nos encantaría que nos dones para mantener este bot!")
 .addField("Metodos de pago:", `[PayPal](https://www.paypal.me/supahfoxeh) [Patreon](https://www.patreon.com/supahfox)`)
 .addField("Bitcoin", "1GCZLCUnAtFhx5iHzRHk9Abwi6nAikNgS9")
 .setColor(config.color)
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
  message.channel.send({ embed: embed })
};
module.exports.config = {
command:"donate",
aliases:["donate"],
cooldown: 5
}