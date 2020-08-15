const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
 message.channel.send("Lo siento, pero este bot es exclusivo para el servidor de soporte.")
};
module.exports.config = {
command:"invite",
aliases:["invite"],
cooldown: 5
}