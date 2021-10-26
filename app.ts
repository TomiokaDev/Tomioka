/* eslint-disable indent */
const fs = require('fs');
// llama al modulo de discord.js
const Discord = require('discord.js');
const DisTube = require('distube');
const { config, token } = require('./APP config/config.json');

// crea un nuevo cliente de Discord
const client = new Discord.Client();
client.config = require('./APP config/config.json');
client.emotes = client.config.emoji;
client.distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, leaveOnFinish: true });
client.queue = new Map();
const eventFiles = fs.readdirSync('./APP events').filter(file => file.endsWith('.js'));
client.comandos = new Discord.Collection();
client.cooldowns = new Discord.Collection();
// lee la carpeta ./comandos
const commandFolders = fs.readdirSync('./APP commands');
// lee la carpeta ./eventos
for (const file of eventFiles) {
	const event = require(`./APP events/${file}`);
	if (event.once) {
       client.once(event.name, (...args) => event.execute(...args, client));
	}
 else {
       client.on(event.name, (...args) => event.execute(...args, client));
	}
}
for (const folder of commandFolders) {
    // !! no se pueden dejar archivos sin subcategoria asignada
    // lee subcarpetas de el directorio ./comandos
	const commandFiles = fs.readdirSync(`./APP commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
        // llama al archivo js en cada subcategoria
		const command = require(`./APP commands/${folder}/${file}`);
		client.comandos.set(command.name, command);
	}
}

const stats = queue => `Volumen: \`${queue.volume}%\` | Filtro: \`${queue.filter || 'Off'}\` | Repetir: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'Toda la Queue' : 'Esta canción' : 'Off'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``;
client.distube
    .on('playSong', (message, queue, song) => message.channel.send(
        `${client.emotes.play} | Escuchando \`${song.name}\` - \`${song.formattedDuration}\`\nPor: ${song.user}\n${stats(queue)}`,
        client.user.setPresence({
            status: 'online',
            activity: {
                  name: song.name,
                  type: 'LISTENING',
            },
          }),
    ))
    .on('addSong', (message, queue, song) => message.channel.send(
        `${client.emotes.success} | Añadido ${song.name} - \`${song.formattedDuration}\` a la queue por: ${song.user}`,
    ))
    .on('playList', (message, queue, playlist, song) => message.channel.send(
        `${client.emotes.play} | Escuchando \`${playlist.title}\` playlist (${playlist.total_items} canciones).\nPor:: ${song.user}\nEscuchando: \`${song.name}\` - \`${song.formattedDuration}\`\n${stats(queue)}`,
    ))
    .on('addList', (message, queue, playlist) => message.channel.send(
        `${client.emotes.success} | Añadido \`${playlist.title}\` playlist (${playlist.total_items} canciones) a la queue\n${stats(queue)}`,
    ))
    // DisTubeOptions.searchSongs = true
    .on('searchResult', (message, result) => {
        let i = 0;
		const embed = new Discord.MessageEmbed()
		.setTitle('Elige una de estas canciones')
		.setDescription(`${result.map(song => `**${++i}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join('\n')}\n*Tienes 60 segundos para elegir, para cancelar escribe algo que no sea un numero*`);
        message.channel.send(embed);
    })
    // DisTubeOptions.searchSongs = true
    .on('searchCancel', message => message.channel.send(`${client.emotes.error} | Busqueda cancelada`))
    .on('error', (message, err) => message.channel.send(`${client.emotes.error} | Ha ocurrido un error: ${err}`));

// entra a discord con el token de tu app
client.login(token).then(() => {
    console.log(`bot started ${client.user.tag}`);
    console.log("Node Version: " + process.version);
    console.log("Discord.js Version: " + Discord.version);

  })