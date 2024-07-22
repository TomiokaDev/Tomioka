const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'colgate',
	description: 'Comando pa el toño XDD',
	aliases: ['toño', 'colgateboy'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

let colgate = ["https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d2/d22416ac2d89e040641ab36be8cf331006a1bcd5_full.jpg"]
let random = colgate[Math.floor(colgate.length * Math.random())];
if(!["178651638209314816"].includes(message.author.id)){
 const embed = new Discord.MessageEmbed()
 .setDescription(`Colgate :moyai:`)
 .setImage(random)
 .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
 .setColor(config.color)
 message.channel.send({ embeds: [embed] })
 }else{
  return message.channel.send("Este comando solo está disponible para usos internos")
 }

},
};

