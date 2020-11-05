//DEFINIMOS DISCORD.JS Y LOS GATEWAY INTENTS
const { Client, Intents } = require('discord.js');
//const myIntents = new Intents();
//myIntents.add('GUILD_PRESENCES', 'GUILD_MESSAGES');
const config = require('./config.js');
const Discord = require('discord.js');
//const client = new Discord.Client({ ws: { intents: myIntents } });
const client = new Discord.Client();
const cooldown = require("./eventos/cooldown.js")
const ytdl = require('ytdl-core');
client.queue = new Map();
const DBL = require("dblapi.js");
const dbl = new DBL(config.dbltoken, client);

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
client.cooldown = new Discord.Collection();
client.comandos = new Discord.Collection();
 

// <-- AQUI EL CONTROLADOR DE COMANDOS: -->


//dentro de nuestro for llamamos a la carpeta comandos creada:
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

//dentro de nuestro for llamamos a la carpeta eventos creada:
for(const file of readdirSync('./eventos/')) { 

  //Esto condicion evitara que los archivos que no son archivos .js no coleccione:
  if(file.endsWith(".js")){

  //Elimina los últimos tres caracteres nombre del archivo para
  //deshacerse de la extensión .js y solo quedarnos con el nombre del evento:
  let fileName = file.substring(0, file.length - 3); 

  //Define una nueva variable 'fileContents' de la exportación del evento dentro de la carpeta eventos:
  let fileContents = require(`./eventos/${file}`); 
  
  // Cuando el evento se activa o es solicitada exportamos la función con 
  // el nombre del evento vinculada y tambien el parametro client.
client.on(fileName, fileContents.bind(null, client));
		
  // Elimina la memoria caché del archivo requerido para facilitar la recarga y no 
  // tener más memoria de la necesaria.

    //let guildMemberAdd = file.split(".")[0];
    
  //client.on(guildMemberAdd, event.bind(null, client));
    //delete require.cache[require.resolve(`./eventos/${file}`)]; 
  
  }
}


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

dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Error de la API de top.gg! ${e}`);
