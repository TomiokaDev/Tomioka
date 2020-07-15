//MONITOREADO POR FRESHPING Y STATUSCAKE
//ANTES LO MONITOREABA UPTIMEROBOT


//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT
const config = require('config.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const cooldown = require("./eventos/cooldown.js")
// El modulo fs se utiliza para leer los archivos y carpetas de un directorio:
let { readdirSync } = require('fs'); 
let scooldown = new Map();


// Referenciamos nuestro archivo de configuración, ahora en JS: 

//Creamos una colección para Discordjs llamada 'comandos':
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

// <-- AQUI LA PROPIEDAD LOGIN: -->


// <-- PROPIEDAD LOGIN: -->

// Inicia sesión en Discord con el token definido en config.
client.login("TOKEN") //agregamos las promesas de la propiedad login.
  .then(() => { 
    console.log(`bot started ${client.user.tag}`);

  })
  .catch((err) => {

    //Si se produce un error al iniciar sesión, se le indicará en la consola.
    console.error("Error al iniciar sesión: " + err);

  });
 
