const Discord = require('discord.js');
const config = require('../config.js');
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();

module.exports = async(client, message, args) => {
try {
let foxgirl = await neko.sfw.foxGirl();


const embed = new Discord.MessageEmbed()
    .setTitle("OwO")
    .setColor(config.color)
    .setImage(foxgirl.url)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
     message.channel.send({ embed: embed })
} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
}
};
module.exports.config = {
command:"foxgirl",
aliases:["foxgirl"],
cooldown: 5
}
