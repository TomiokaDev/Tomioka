const Discord = require('discord.js');
const config = require('../config.js');
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();

module.exports = async(client, message, args) => {
try {
let nekos = await neko.sfw.neko();


const embed = new Discord.MessageEmbed()
    .setTitle("Nekos!")
    .setColor(config.color)
    .setImage(nekos.url)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
     message.channel.send({ embed: embed })
} catch (err) {
    console.log(err);
    return message.reply("Hubo un error"); // estoo
}
};
module.exports.config = {
command:"neko",
aliases:["neko"],
cooldown: 5
}
