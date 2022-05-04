//DEFINIMOS DISCORD.JS
const Discord = require('discord.js');
const { Client, Collection, Intents, Permissions } = require('discord.js');
const client = new Discord.Client({
	intents: [
		      Intents.FLAGS.GUILDS,
			  Intents.FLAGS.GUILD_MESSAGES,
			  Intents.FLAGS.DIRECT_MESSAGES,
			  Intents.FLAGS.GUILD_VOICE_STATES,
			  //Intents.FLAGS.GUILD_MEMBERS
			 ],
	ws: { properties: { $browser: "Discord iOS" }}
});


const ytdl = require('ytdl-core');
const { DisTube } = require("distube");
const { YtDlpPlugin } = require("@distube/yt-dlp");
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { SpotifyPlugin } = require('@distube/spotify');


client.queue = new Map();
const fs = require('fs');
const { token } = require('./config.json');
const config = require('./config.json');

client.distube = new DisTube(client, {
	searchSongs: 1, 
    leaveOnFinish: true,
	leaveOnStop: false,
	emitNewSongOnly: true,
	emitAddSongWhenCreatingQueue: false,
	emitAddListWhenCreatingQueue: false,
	plugins: [
	  new SpotifyPlugin({
		emitEventsAfterFetching: true
	  }),
	  new SoundCloudPlugin(),
	  new YtDlpPlugin()
	],
	youtubeDL: false
  })

client.emotes = config.emoji;


client.comandos = new Discord.Collection();
client.cooldowns = new Discord.Collection();


const { AutoPoster } = require('topgg-autoposter')
const ap = AutoPoster(config.dbltoken, client)


// El modulo fs se utiliza para leer los archivos y carpetas de un directorio:
let { readdirSync } = require('fs'); 
let scooldown = new Map();


// Referenciamos nuestro archivo de configuración, ahora en JS: 

//Creamos una colección para Discordjs llamada 'comandos':

for(const file of readdirSync('./comandos/')) { 

	//Esto condicion evitara que los archivos que no son archivos .js no coleccione:
	if(file.endsWith(".js")) { 
  
	//Elimina los últimos tres caracteres nombre del archivo para
	//deshacerse de la extensión .js y solo quedarnos con el nombre del comando:
	let fileName = file.substring(0, file.length - 3); 
  
	//Define una nueva varible 'fileContents' de la exportación del comando 
	//dentro de la carpeta comandos:
	let fileContents = require(`./comandos/${file}`); 
  
	//Agrega el nombre del comando a la colección client.commands con un 
	//valor de sus exportaciones respectivas.
	client.comandos.set(fileName, fileContents);
	}
  }
  
  // <-- AQUI EL CONTROLADOR DE EVENTOS: -->
  const eventFiles = fs.readdirSync('./eventos').filter(file => file.endsWith('.js'));
  //dentro de nuestro for llamamos a la carpeta eventos creada:
  // lee la carpeta ./comandos
  const commandFolders = fs.readdirSync('./comandos');
  // lee la carpeta ./eventos
for (const file of eventFiles) {
	const event = require(`./eventos/${file}`);
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
	const commandFiles = fs.readdirSync(`./comandos/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
        // llama al archivo js en cada subcategoria
		const command = require(`./comandos/${folder}/${file}`);
		client.comandos.set(command.name, command);
	}
}
		  
	// Elimina la memoria caché del archivo requerido para facilitar la recarga y no 
	// tener más memoria de la necesaria.
  
	  //let guildMemberAdd = file.split(".")[0];
	  
	//client.on(guildMemberAdd, event.bind(null, client));
	  //delete require.cache[require.resolve(`./eventos/${file}`)]; 






//MUSIC

client.distube
    .on('playSong', (message, queue, song) => {
    const status = `Volumen: ${queue.volume}% | Filtro: ${queue.filter || client.emotes.error} | Repetir: ${queue.repeatMode ? queue.repeatMode === 2 ? 'Toda la Queue' : 'Esta canción' : client.emotes.error} | Autoplay: ${queue.autoplay ? client.emotes.success : client.emotes.error}`;
	const embed = new Discord.MessageEmbed()
	.setTitle('Reproduciendo canción!')
	//.setThumbnail(song.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 }))
	//.setImage(song.thumbnail)
	.addField("Escuchando", "``" + song.name + "``")
	.addField("Duración", "``" + song.formattedDuration + "``")
	.addField("Pedido por", song.user)
	.setFooter({text: status});
	queue.textChannel.send({ embeds: [embed] }).then(queue => queue.textChannel.send.delete({timeout: 40000}));
	})
    .on('addSong', (message, queue, song) => {
        const status = `Volumen: ${queue.volume}% | Filtro: ${queue.filter || client.emotes.error} | Repetir: ${queue.repeatMode ? queue.repeatMode === 2 ? 'Toda la Queue' : 'Esta canción' : client.emotes.error} | Autoplay: ${queue.autoplay ? client.emotes.success : client.emotes.error}`;
	const embed = new Discord.MessageEmbed()
	.setTitle('Añadido a la queue!')
	//.setThumbnail(song.user.displayDisplayAvatarURL({ dynamic: false, format: 'png', size: 1024 }))
	//.setImage(song.thumbnail)
	.addField("Escuchando", "``" + song.name + "``")
	.addField("Duración", "``" + song.formattedDuration + "``")
	.addField("Por", song.user)
	.setFooter({text: status});
	queue.textChannel.send({ embeds: [embed] }).then(queue => queue.textChannel.send.delete({timeout: 20000}));
	})

    .on('playList', (message, queue, playlist, song) => {
        const status = `Volumen: ${queue.volume}% | Filtro: ${queue.filter || client.emotes.error} | Repetir: ${queue.repeatMode ? queue.repeatMode === 2 ? 'Toda la Queue' : 'Esta canción' : client.emotes.error} | Autoplay: ${queue.autoplay ? client.emotes.success : client.emotes.error}`;
	const embedplaylist = new Discord.MessageEmbed()
	.setTitle('Playlist añadida a la queue!')
	//.setThumbnail(song.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 }))
	.addField("Nombre de playlist", "``" + playlist.title + "``")
	.addField("Tamaño de la playlist", "``" + playlist.total_items + "`` " + "canciones")
	.setImage(song.thumbnail)
	.addField("Escuchando", "``" + song.name + "``")
	.addField("Duración", "``" + song.formattedDuration + "``")
	.addField("Por", song.user)
	.setFooter({text: status});
	queue.textChannel.send({ embeds: [embedplaylist] }).then(queue => queue.textChannel.send.delete({timeout: 60000}));

	})

    .on('addList', (message, queue, playlist) => {
	    const status = `Volumen: ${queue.volume}% | Filtro: ${queue.filter || client.emotes.error} | Repetir: ${queue.repeatMode ? queue.repeatMode === 2 ? 'Toda la Queue' : 'Esta canción' : client.emotes.error} | Autoplay: ${queue.autoplay ? client.emotes.success : client.emotes.error}`;
		const embedplaylist = new Discord.MessageEmbed()
		.setTitle('Playlist añadida a la queue!')
		.addField("Nombre de playlist", "``" + playlist.title + "``")
		.addField("Tamaño de la playlist", "``" + playlist.total_items + "`` " + "canciones")
		.addField("Duración", "``" + song.formattedDuration + "``")
		.addField("Por", song.user)
		.setFooter({text: status});
		queue.textChannel.send({ embeds: [embedplaylist] }).then(queue => queue.textChannel.send.delete({timeout: 60000}));
	})    
     // DisTubeOptions.searchSongs = true
    .on('searchResult', (message, result, song) => {
        let i = 0;
		const embed = new Discord.MessageEmbed()
		.setTitle('Elige una de estas canciones')
		.setDescription(`${result.map(song => `**${++i}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join('\n')}\n*Tienes 60 segundos para elegir, para cancelar escribe algo que no sea un numero*`);
        message.channel.send(embed);
    })
    // DisTubeOptions.searchSongs = true
    .on('searchCancel', message => message.channel.send(`${client.emotes.error} | Busqueda cancelada`))

	.on('error', (message, e, queue) => {
		//if (message) queue.message.send(`${client.emotes.error} | Hubo un error`)
		//else 
		console.error(e)
	  })

	  .on('empty', channel => channel.send('Canal de voz vacio | Desconectando...'))

	  .on('searchNoResult', (message, query) =>
		message.channel.send(`${client.emotes.error} | No se encontaron resulatdos para \`${query}\`!`)
	  )

	  .on('finish', queue => queue.textChannel.send('Finished!'))

  // <-- PROPIEDAD LOGIN: -->
  
  // Inicia sesión en Discord con el token definido en config.
  
 ap.on('posted', () => {
	console.log('Server count posted!');
  })
  
  ap.on('error', e => {
   console.log(`Error de la API de top.gg! ${e}`);
  })
//entra a discord con el token de tu app
client.login(config.discordtoken) //agregamos las promesas de la propiedad login.
	.then(() => {
	  console.log(`Conexión exitosa a la API de Discord | index.js listo`);
	})
	.catch((err) => {
  
	  //Si se produce un error al iniciar sesión, se le indicará en la consola.
	  console.error("Error al iniciar sesión: " + err);
  
	});
