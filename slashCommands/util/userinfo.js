const Discord = require('discord.js');
const moment = require("moment");
const config = require('../../config.json');

module.exports = {
	name: 'userinfo',
	description: 'Comando para que te muestre la info de un usuario mencionado',
	aliases: ['3pingos'],
	guildOnly: true,
	cooldown: 5,
	async run: (client, interaction) => {

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
 return interaction.reply("Menciona a alguien")
}
  let emoji =  usuario.flags.toArray().map(f => flags[f]).join(" ");
  const embed = new EmbedBuilder()
 .addField("Username", usuario.tag)
 .addField("ID", usuario.id)
 .addField("Estado", usuario.presence.status)
 .addField("Fecha de creación", usuario.createdAt)
 .addField("Bot?", usuario.bot)
  if(emoji.length > 0)
  embed.addField("Insignias", emoji);
  embed
 .setThumbnail(usuario.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
 .setColor(config.color)
  interaction.reply({ embeds: [embed] })

},
};