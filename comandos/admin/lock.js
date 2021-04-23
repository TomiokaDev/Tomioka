const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = {
	name: 'lock',
	description: 'Anti-raid CMD',
	aliases: ['lockdown'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

if(["803367323493990421", "812795996391473162", "678756451581427743"].includes(message.guild.id)){

if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('No tienes permisos.');

if(!args[0]) return message.channel.send('INTERNAL DEV CMD\n``tk!lockdown`` ON OFF');

const query = args[0].toLowerCase();

if(!["on", "off"].includes(query)) return message.reply("La opción no es valida");

const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');

        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send('Todos los canales han sido bloqueados!');
       } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                }).then(() => {
                        channel.setName(channel.name.replace('🔒', ''))
                    }
                )
            })
            return message.channel.send('Todos los canales han sido desbloqueados!')
        }

 }else{
  return message.channel.send("Este comando está en desarrollo.")
 }

},
};
