const Discord = require('discord.js');
const config = require('../../config.json');
const { Permissions } = require('discord.js');
module.exports = {
	name: 'lock',
	description: 'Anti-raid CMD',
	aliases: ['lockdown'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

if(!["178651638209314816", "251897216300613632", "434888018067980288"].includes(message.author.id)) return;

if(!["178651638209314816"].includes(message.author.id)){

if(!message.member.permissions.has((Permissions.FLAGS.ADMINISTRATOR))) return message.channel.send({ content: 'No tienes permisos.'});

}


if(!args[0]) return message.channel.send({ content: 'INTERNAL DEV CMD\n``tk!lock`` ON OFF'});

const query = args[0].toLowerCase();

if(!["on", "off"].includes(query)) return message.reply({ content:"La opción no es valida"});

const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');

        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send({ content: 'Todos los canales han sido bloqueados!'});
       } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                }).then(() => {
                        channel.setName(channel.name.replace('🔒', ''))
                    }
                )
            })
            return message.channel.send({ content: 'Todos los canales han sido desbloqueados!'});
        }

},
};
