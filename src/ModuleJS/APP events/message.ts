/* eslint-disable no-mixed-spaces-and-tabs */
// import Discord = require('discord.js');
	const Discord = require("discord.js")
const { prefix, devID } = require('./../APP config/config.json');
const db = require('megadb');
module.exports = {
	name: 'message',
	// eslint-disable-next-line no-unused-vars
	async execute(message) {
		let niveles = new db.crearDB({
			nombre: `${message.guild.id}`,
			carpeta: "APP_db",
			sub: "locales"
		  });
		// ejemplo de evento message esto envia en la consola el nombre del autor del mensaje, lo que envio y donde lo envió
		// si el usuario es un bot
		if(!message.author.bot) {
		//sistema de niveles
		const dbname = require(`./../APP_db/locales/${message.guild.id}`);
		const xp = Math.round(Math.random() * 10)
		//si nunca habia hablado en presencia del bot
		if(dbname[`${message.author.id}`] === undefined) {
			niveles.establecer(`${message.author.id}`, {xp: 0, nivel: 0, lastxp: 100})
		} else {
			niveles.sumar(`${message.author.id}-xp`, xp, "-")
			if(dbname[`${message.author.id}`].xp > 100 && dbname[`${message.author.id}`].nivel === 0) {
				niveles.establecer(`${message.author.id}`, {xp: dbname[`${message.author.id}`].xp, nivel: 1, lastxp:150})
			} else if(dbname[`${message.author.id}`].xp > 100 && dbname[`${message.author.id}`].nivel != 0 && dbname[`${message.author.id}`].xp > dbname[`${message.author.id}`].lastlevel ){
				var nextlvl = dbname[`${message.author.id}`].lastxp + (dbname[`${message.author.id}`].lastxp / 2)

				if(dbname[`${message.author.id}`].xp === nextlvl) {
					var lvl = dbname[`${message.author.id}`].nivel + 1;
					niveles.establecer(`${message.author.id}`, {xp: dbname[`${message.author.id}`].xp, nivel: lvl, lastxp: nextlvl})
				}
			} else return; // cuando sea menor no hacer nada
		}
		//if(!dbname.includes(message.author.id)) return message.channel.send("asd")

			const d = new Date,
				dformat = [d.getMonth() + 1,
				  d.getDate(),
				  d.getFullYear()].join('/') + ' ' +
				 [d.getHours(),
				  d.getMinutes(),
				  d.getSeconds()].join(':');

			console.log('Nombre: ' + message.author.tag);
			console.log('Guild: ' + message.guild.name + ' en: #' + message.channel.name);
			console.log('Mensaje: ' + message.content);
			console.log('Fecha: ' + dformat);
		}

		if (!message.content.startsWith(prefix) || message.author.bot) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();

		const command = message.client.comandos.get(commandName)
               || message.client.comandos.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return;

		if(!command) return message.channel.send('el comando no existe');

		if (command.guildOnly && message.channel.type === 'dm') {
			return message.reply('No es posible ejecutar ese comando dentro de DMs!');
		}

		if (command.permissions) {
			const authorPerms = message.channel.permissionsFor(message.author);
			if (!authorPerms || !authorPerms.has(command.permissions)) {
				return message.reply('Necesitas el permiso ' + '`' + `${command.permissions}` + '`' + ' para hacer eso.');
			}
		}
		// si no se especifico ningun argumento
		if (command.args && !args.length) {
			let reply = `No especificaste ningún argumento, ${message.author}!`;
			// si el comando tiene un uso especificado
			if (command.usage) {
				reply = `\nEl uso correcto sería \`${prefix}${command.name} ${command.usage}\``;
			}

			return message.channel.send(reply);

		}

		if (command.voiceOnly && !message.member.voice.channel) return message.channel.send(`${message.client.emotes.error} | Debes estar en un canal de voz para hacer eso!`);


		if (command.devOnly) {
			if(devID.length === 0) return message.channel.send('El dueño del bot no ha especificado su `ID` aún así que esos comandos estan deshabilitados.');
			if (message.author.id != devID) return message.channel.send(`Ese comando solo puede ser utilizado por el dueño del bot, ${message.author}`);

		}


		const { cooldowns } = message.client;

		if (!cooldowns.has(command.name)) {
			cooldowns.set(command.name, new Discord.Collection());

		}

		// eslint-disable-next-line no-unused-vars
		const now = Date.now();
		const timestamps = cooldowns.get(command.name);
		const cooldownAmount = (command.cooldown || 3) * 1000;

		if (timestamps.has(message.author.id)) {
			const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return message.reply(`Tienes que esperar \`${timeLeft.toFixed(1)} segundos(s)\` para usar \`${command.name}\` de nuevo.`);
			}
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

		try {
			command.execute(message, args);
		}
		catch (error) {
			console.error(error);
			message.reply('Hubo un error al tratar de ejecutar ese comando\n `' + error + '`');
		}

	},
};
