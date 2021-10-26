const Discord = require("discord.js");
const fetch = require("node-fetch");
const client = new Discord.Client();
const config = require('../../config.json');

module.exports = {
  name: 'pan',
  description: 'pan',
  aliases: ['bread', 'pandepan', 'panconpan'],
  guildOnly: true,
  cooldown: 5,
  async execute(message, args) {

    var member = message.mentions.users.first() || message.guild.members.cache.get(args.join(" "));

    let pan = ["http://www.hacerpan.net/ImagenesHacerPan/ImagenesHacerPan/pan_trigo.jpg", "https://okdiario.com/img/recetas/2017/06/14/pan-blanco-amish.jpg", "https://cdn.discordapp.com/attachments/671170382010515466/746451807923994654/stsmall507x507-pad600x600f8f8f8.jpg"]

    let captura = pan[Math.floor(pan.length * Math.random())];

    const embed = new Discord.MessageEmbed()
      .setTitle("pan")
      .setDescription("pan")
      .setImage(captura)
      .setColor(config.color)
      .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    return message.channel.send({ embed: embed });
  },
};

  //if(!roquefore);
  //return message.send : ? ("Pan con roquefor OwO", "Me crecio el testiculo izquierdo 0,98 cm desde la navidad pasada cuando le pedi al almacenero que me otorgara el privilegio de un conteo de espermatozoides")
