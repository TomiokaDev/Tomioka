const Discord = require('discord.js'); 
const config = require('../../config.json');

module.exports = {
	name: 'facha',
	description: 'MATIGATO FACHA ANASHEEE',
	aliases: ['matigato'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

let matigato = ["https://cdn.discordapp.com/attachments/671170382010515466/735956679870513242/unknown.png", "https://cdn.discordapp.com/attachments/671170382010515466/735953675851137184/unknown.png", "https://cdn.discordapp.com/attachments/671170382010515466/735957778182570114/unknown.png", "https://cdn.discordapp.com/attachments/671170382010515466/735993925101420664/unknown.png", "https://cdn.discordapp.com/attachments/671170382010515466/735994263002677318/unknown.png"]
let facha = matigato[Math.floor(matigato.length * Math.random())];

if(!["178651638209314816"].includes(message.author.id)){
	const embed = new Discord.MessageEmbed()
	.setDescription(`MATIGATO FACHA :sunglasses::moyai:`)
	.setImage(facha)
	.setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
	.setColor(config.color)
	message.channel.send({ embeds: [embed] })
	}

if(["624411964931571722","678756451581427743", "613867734819668137"].includes(message.guild.id)){
 const embed = new Discord.MessageEmbed()
 .setDescription(`MATIGATO FACHA :sunglasses::moyai:`)
 .setImage(facha)
 .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
 .setColor(config.color)
 message.channel.send({ embeds: [embed] })
 }else{
  return message.channel.send("Este comando solo está disponible para usos internos")
 }

    },
  };

