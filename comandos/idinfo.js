const Discord = require('discord.js');
const config = require('../config.js');
const moment = require("moment");

module.exports = async(client, message, args) => {

try{
if(isNaN(args[0])) return message.channel.send("Ingresa una ID")
if(args[0].length < 12) return message.channel.send("ID invalida")
let id = await client.users.fetch(args[0]);
if(!id) return message.channel.send("Usuario no encontrado. Ingresa una ID válida")

let flags = {
   DISCORD_EMPLOYEE: "<:discordemployee:738156738326298625>",
   DISCORD_PARTNER: "<:partner:738156787076956301>",
   HYPESQUAD_EVENTS: "<:HypeSquadEvents:738156771675340802>",
   BUGHUNTER_LEVEL_1: "<:Bughunterlevel1:738156708333092886>",
   HOUSE_BRAVERY: "<:bravery:738156680134524945>",
   HOUSE_BRILLIANCE: "<:briliance:738156695531814932>",
   HOUSE_BALANCE: "<:balance:738156646165118987>",
   EARLY_SUPPORTER: "<:earlysupport:738156753925046382>",
   TEAM_USER: "<:TeamUser:738156883424182372>",
   SYSTEM: "<:system:738156800213385217>",
   BUGHUNTER_LEVEL_2: "<:Bughunterlevel2:738156724564787301>",
   VERIFIED_BOT: "<:botverified:738156663978197112>",
   VERIFIED_DEVELOPER: "<:VerifiedDeveloper:738156897412317255>",
}
  let emoji =  id.flags ? id.flags.toArray().map(f => flags[f]).join(" ") : "";
  const embed = new Discord.MessageEmbed()
 .addField("Username", id.tag)
 .addField("ID", id.id)
 .addField("Fecha de creación", id.createdAt)
  if(emoji.length > 0)
  embed.addField("Insignias", emoji);
  embed
 .setThumbnail(id.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
} catch (err) {
    console.log(err);
    return message.reply("Hubo un error. Parece que el comando está en mantenimiento o la id es inválida.");
}
};
module.exports.config = {
command:"idinfo",
aliases:["idinfo"],
cooldown: 5
}
