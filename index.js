//DEFINIMOS DISCORD.JS Y LOS GATEWAY INTENTS
const { Client, Intents } = require('discord.js');
//const myIntents = new Intents();
//myIntents.add('GUILD_PRESENCES', 'GUILD_MESSAGES');
const Discord = require('discord.js');
//const client = new Discord.Client({ ws: { intents: myIntents } });
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const DisTube = require('distube');
client.queue = new Map();
const fs = require('fs');
const { token } = require('./config.json');
const config = require('./config.json');
client.distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true, leaveOnFinish: true });
client.emotes = config.emoji;


client.comandos = new Discord.Collection();
client.cooldowns = new Discord.Collection();
//const DBL = require("dblapi.js");
//const dbl = new DBL(config.dbltoken, client);

//const dbl = require('topgg-autoposter');
//const ap = dbl(config.dbltoken, client);


const constant = require('./node_modules/discord.js/src/util/Constants.js')
constant.DefaultOptions.ws.properties.$browser = `Discord iOS`


// INTENTS NO PRIVILEGIADOS

//const otherIntents = new Intents(Intents.NON_PRIVILEGED);
//otherIntents.remove(['GUILDS', 'GUILD_MESSAGES']);

//const otherIntents2 = new Intents(32509);
//otherIntents2.remove(1, 512);


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

const status = queue => `Volumen: \`${queue.volume}%\` | Filtro: \`${queue.filter || 'Off'}\` | Repetir: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'Toda la Queue' : 'Esta canción' : 'Off'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``;
client.distube
    .on('playSong', (message, queue, song) => message.channel.send(
        `${client.emotes.play} | Escuchando \`${song.name}\` - \`${song.formattedDuration}\`\nPor: ${song.user}\n${status(queue)}`,
    ))
    .on('addSong', (message, queue, song) => message.channel.send(
        `${client.emotes.success} | Añadido ${song.name} - \`${song.formattedDuration}\` a la queue por: ${song.user}`,
    ))
    .on('playList', (message, queue, playlist, song) => message.channel.send(
        `${client.emotes.play} | Escuchando \`${playlist.title}\` playlist (${playlist.total_items} canciones).\nPor:: ${song.user}\nEscuchando: \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`,
    ))
    .on('addList', (message, queue, playlist) => message.channel.send(
        `${client.emotes.success} | Añadido \`${playlist.title}\` playlist (${playlist.total_items} canciones) a la queue\n${status(queue)}`,
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
  
  // <-- PROPIEDAD LOGIN: -->
  
  // Inicia sesión en Discord con el token definido en config.
  client.login(config.discordtoken) //agregamos las promesas de la propiedad login.
	.then(() => { 
	  console.log(`bot started ${client.user.tag}`);
	  console.log("Node Version: " + process.version);
	  console.log("Discord.js Version: " + Discord.version);
  
	})
	.catch((err) => {
  
	  //Si se produce un error al iniciar sesión, se le indicará en la consola.
	  console.error("Error al iniciar sesión: " + err);
  
	});
  
// ap.on('posted', () => {
//	console.log('Server count posted!');
//  })
  
//  ap.on('error', e => {
//   console.log(`Error de la API de top.gg! ${e}`);
//  })
// entra a discord con el token de tu app
client.login(config.discordtoken);
