const Discord = require('discord.js');
const config = require('../config.js');
const fetch = require("node-fetch");

module.exports = async(client, message, args) => {
try {
const meowFetch = await fetch("https://nekos.life/api/v2/img/meow"),
      meowImg = await meowFetch.json();


const embed = new Discord.MessageEmbed()
    .setTitle("Gatitoooo uwu")
    .setColor(config.color)
    .setImage(meowImg.url)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
     message.channel.send({ embed: embed })
} catch (err) {
    console.log(err);
    return message.reply("Hubo un error"); // estoo
}
};
module.exports.config = {
command:"owo",
aliases:["owo"],
cooldown: 5
}
