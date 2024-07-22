const Discord = require('discord.js');
const { prefix, devID } = require('../config.json');
const db = require("megadb"); //base de datos
const bl = new db.crearDB("blacklist"); //base de datos donde esta almacenado las ids
const { Permissions } = require('discord.js');
module.exports = {
	name: 'messageCreate',
	// eslint-disable-next-line no-unused-vars
	execute(message, client) {

		if (!message.content.startsWith(prefix) || message.author.bot) return;
        


		const args = message.content.slice(prefix.length).trim().split(/ +/);
		let reason = args[2] ? args.slice(2).join(" ") : "No hay razón especificada"
		const commandName = args.shift().toLowerCase();

      //BLACKLIST DENY
      //if(checkBlackList(message)) return message.channel.send(`\`${message.author.tag}\` No puedes usar los comandos de ${client.user.username} porque te encuentras en la \`blacklist\` por un mal uso del bot. Para más información contacta con ${creador.tag}.\n> **Razón:** ${reason}`);
	if(checkBlackList(message)) return message.channel.send(`\`${message.author.tag}\` No puedes usar los comandos de ${message.client.user.username} porque te encuentras en la \`blacklist\` por un mal uso del bot.\n> **Razón:** ${reason}`);


		const command = message.client.comandos.get(commandName)
               || message.client.comandos.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return;

		if(!command) return message.channel.send({ content: 'el comando no existe'});

		if (command.guildOnly && message.channel.type === 'dm') {
			return message.reply({ content:'No es posible ejecutar ese comando dentro de DMs!'});
		}

		if (command.permissions) {
			const authorPerms = message.channel.permissionsFor(message.author);
			if (!authorPerms || !authorPerms.has(command.permissions)) {
				return message.reply({ content:'Necesitas el permiso ' + '`' + `${command.permissions}` + '`' + ' para hacer eso.'});
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
			if(devID.length === 0) return message.channel.send({ content: 'El dueño del bot no ha especificado su `ID` aún así que esos comandos estan deshabilitados.'});
			if (message.author.id != devID) return message.channel.send(`Acceso denegado. Debes ser un ``desarrollador del bot`` para poder ejecutar este comando, ${message.author}.`);

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
				return message.reply({ content:`Tienes que esperar \`${timeLeft.toFixed(1)} segundos(s)\` para usar \`${command.name}\` de nuevo.`});
			}
		}

		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

		try {
			command.execute(message, args);
		}
		catch (error) {
			console.error(error);
			message.reply({ content:"Hubo un error al ejecutar el comando D: \n> **Error:** " + error}); // estoo
		}


		function checkBlackList(message){
			//funcion la cual verifica los datos de la db
				if(!["178651638209314816"].includes(message.author.id) && bl.has(`${message.author.id}`)){
				  //si la id del autor no es tu id y ademas ese autor esta en la bl entra aca
				  return true; //retorna true
			  }
			   return false; //si no entra en la condicional significa que es false, tons aca false por default
			  
			
			}

	},
};