const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports ; async (bot, message, args, config) => {
  var member = message.mentions.users.first() || message.guild.members.get(args.join(" "));

  try {
    if (member === message.author) return message.channel.send("No puedes acariciarte a ti mismo, pero si te sientes solo ven y yo te acaricio uwu"); // estoo
    if (member === bot.user) return message.channel.send(`**${message.member.displayName}**, *awwwww*, que lindo -corresponde-`); // estoo

     let pan = ["http://www.hacerpan.net/ImagenesHacerPan/ImagenesHacerPan/pan_trigo.jpg, https://okdiario.com/img/recetas/2017/06/14/pan-blanco-amish.jpg"]
    
     let captura = pan[Math.floor(pan.length * Math.random())];
    
    const embed = new Discord.MessageEmbed()
     .setTitle("pan")
    .setDescription("pan")
    .setColor(config.color)
    .setImage(pan)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL)
    return message.channel.send({
      embed: {
        description: member
          ? `**${message.member.displayName}** acarició a **${member.username}** uwu!`
          : `**${message.member.displayName}** Debes mencionar a alguien, si no tiens pirilin ven y te lo hago crecer con mi hoyo anal OwO`,
        image: {
          url: member
            ? captura
            : "http://gifimage.net/wp-content/uploads/2017/06/anime-cat-gif-17.gif"
        },
        color: message.guild ? message.guild.me.displayColor : "#00e059"
      }
    });
  } catch (err) {
    console.log(err);
    return message.reply("Hubo un error"); // estoo
  }
};
module.exports.config = {
  command: "kill",
  aliases: ["kill"]
};
 
  //if(!roquefore);
  //return message.send : ? ("Pan con roquefor OwO", "Me crecio el testiculo izquierdo 0,98 cm desde la navidad pasada cuando le pedi al almacenero que me otorgara el privilegio de un conteo de espermatozoides")
