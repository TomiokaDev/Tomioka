const mongo = require('../../mongo.js');
const commandPrefixSchema = require('../../schemas/command-prefix-schema.js');
const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'prefix',
	description: 'Cambiar prefix',
	aliases: ['setprefix', 'prefixset'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Necesitas permisos de administrador para cambiar el prefix");

        await mongo().then(async mongoose => {
            try {
                const guildId = message.guild.id
                const prefix = args[0]

                await commandPrefixSchema.findOneAndUpdate({
                    _id: guildId
                }, {
                    _id: guildId,
                    prefix
                }, {
                    upsert: true
                })

                message.reply(`El prefix fue cambiado a ${prefix}`)
            } finally {
                mongoose.connection.close()
            }
        })


    },
};
