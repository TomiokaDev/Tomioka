const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
 message.channel.send("Para invitar el bot entrá acá: https://top.gg/bot/531408067993141248")
};
module.exports.config = {
command:"invite",
aliases:["invite"],
cooldown: 5
}
