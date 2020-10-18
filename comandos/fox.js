const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client();
const config = require('../config.js');

module.exports = async (client, message, args) => {

  try {

     let fox = await fetch("https://randomfox.ca/floof/"),
     foximg = await fox.json();
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Zorritos!")
    .setImage(foximg.image)
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    return message.channel.send({ embed : embed });
  } catch (err) {
    console.log(err);
    return message.reply("Hubo un error"); // estoo
  }
};
module.exports.config = {
  command: "fox",
  aliases: ["fox"],
  cooldown: 5
};
