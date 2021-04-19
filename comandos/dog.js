const Discord = require('discord.js');
const config = require('../config.js');
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();

module.exports = async(client, message, args) => {
try {
let woof = await neko.sfw.woof();


const embed = new Discord.MessageEmbed()
    .setTitle("Perritos!")
    .setColor(config.color)
    .setImage(woof.url)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
     message.channel.send({ embed: embed })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"dog",
aliases:["dog"],
cooldown: 5
}
