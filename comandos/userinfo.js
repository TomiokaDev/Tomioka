const Discord = require('discord.js');
const config = require('../config.js');
const moment = require("moment");

module.exports = async(client, message, args) => {
try{
let usuario = await message.mentions.users.first() || message.author;

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
if(!usuario){
 return message.channel.send("Menciona a alguien")
}
  const embed = new Discord.MessageEmbed()
 .addField("Username", usuario.tag)
 .addField("ID", usuario.id)
 .addField("Estado", usuario.presence.status)
 .addField("Fecha de creación", usuario.createdAt)
 .addField("Bot?", usuario.bot)
 .addField("Insignias", usuario.flags.toArray().map(f => flags[f]).join(" "))
 .setThumbnail(usuario.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
}catch (err) {
  console.log(err);
   return message.reply("Hubo un error"); // estoo
}
};
module.exports.config = {
command:"userinfo",
aliases:["userinfo"],
cooldown: 5
}