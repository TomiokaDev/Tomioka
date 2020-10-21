const Discord = require('discord.js');
const config = require('../config.js'); 
const puppeteer = require('puppeteer');

module.exports = async(client, message, args) => {
if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return;
try{
let say = args.join();

const grabPage = async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto(say)
	const el = await page.$('#contents')
	const buffer = await el.screenshot({ path: `${Date.now()}.png` })

	await browser.close()
	return buffer
}
const screenshot = await grabPage()
  const embed = new Discord.MessageEmbed()
 .setDescription("Screenshot de " + goto)
 .setColor(config.color)
 .attachFile(screenshot)
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
  message.channel.send({ embed: embed })
}catch (error) {
  client.queue.delete(message.guild.id);
  return message.channel.send("Hubo un error al ejecutar el comando. Error: " + error);
}
}
module.exports.config = {
command:"screenshot",
aliases:["screenshot"],
cooldown: 5
}
