const Discord = require('discord.js');
const config = require('../config.js');
const cooldown = new Set();
module.exports = async (client, message, args) => {
    if(message.author.id !== '178651638209314816') return message.reply("Acceso denegado.");
     message.channel.send("Reiniciando...").then(async msg => {
        msg.edit("Restarting...")
        await msg.edit("Restarting, please wait...")
        msg.edit("Success!")
       setTimeout(() => { process.exit() }, 2000)
    })
 }