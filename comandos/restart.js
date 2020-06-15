const Discord = require('discord.js');
const config = require('../config.js');
const ready = require('../eventos/ready.js') 
module.exports = async (client, message, args) => {
    if(message.author.id !== '178651638209314816') return message.reply("Acceso denegado.");
     message.channel.send("Reiniciando...").then(async msg => {
        msg.edit("Restarting...")
        client.destroy();
        await client.login(process.env.TOKEN)
        await msg.edit("Restarting, please wait...")
        msg.edit("Success!")
    })
 }